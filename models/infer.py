import os
import time
from datetime import datetime
from pydub import AudioSegment
import speech_recognition as sr
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# -------------------- Configuration --------------------

MP3_FOLDER = "mp3_files"
WAV_FOLDER = "wav_files"

os.makedirs(MP3_FOLDER, exist_ok=True)
os.makedirs(WAV_FOLDER, exist_ok=True)

# Abusive words
ABUSIVE_WORDS = {'red', 'green', 'blue'}

# Total duration of the audio in seconds
TOTAL_DURATION = 8 

# -------------------- Audio Processing --------------------

recognizer = sr.Recognizer()

def convert_mp3_to_wav(mp3_path, wav_path):
    try:
        audio = AudioSegment.from_mp3(mp3_path)
        audio.export(wav_path, format="wav")
        print(f"Converted '{mp3_path}' to '{wav_path}'")
    except Exception as e:
        print(f"Error converting {mp3_path} to WAV: {e}")

def transcribe_audio(file_path):
    try:
        with sr.AudioFile(file_path) as source:
            audio_data = recognizer.record(source)
            text = recognizer.recognize_google(audio_data)
        return text
    except sr.UnknownValueError:
        print(f"Google Speech Recognition could not understand audio in '{file_path}'.")
        return ""
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")
        return ""
    except Exception as e:
        print(f"Error transcribing audio '{file_path}': {e}")
        return ""

def find_abusive_words(text):
    words = text.split()
    timestamps = []

    for i, word in enumerate(words):
        if word.lower() in ABUSIVE_WORDS: 
            timestamps.append((word, i))

    return timestamps

def process_wav_file(wav_path):
    print(f"Processing '{wav_path}'")
    transcribed_text = transcribe_audio(wav_path)
    if not transcribed_text:
        print("No transcription available.")
        return

    print(f"Transcribed Text: {transcribed_text}")

    abusive_timestamps = find_abusive_words(transcribed_text)

    words_count = len(transcribed_text.split())
    time_per_word = TOTAL_DURATION / words_count if words_count > 0 else 0

    for word, index in abusive_timestamps:
        timestamp = index * time_per_word
        print(f"Abusive word '{word}' found at {timestamp:.2f} seconds.")

# -------------------- Directory Monitoring --------------------

class MP3Handler(FileSystemEventHandler):
    def on_created(self, event):
        # Ignore directories
        if event.is_directory:
            return

        # Process only .mp3 files
        if event.src_path.lower().endswith('.mp3'):
            mp3_path = event.src_path
            filename = os.path.basename(mp3_path)
            name, _ = os.path.splitext(filename)

            # Create a timestamped filename for the WAV file
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            wav_filename = f"{name}_{timestamp}.wav"
            wav_path = os.path.join(WAV_FOLDER, wav_filename)

            # Convert MP3 to WAV
            convert_mp3_to_wav(mp3_path, wav_path)

            # Optionally, remove or move the processed MP3 file
            # os.remove(mp3_path)  # Uncomment to delete after processing

            # Process the WAV file
            process_wav_file(wav_path)

def monitor_folder():
    event_handler = MP3Handler()
    observer = Observer()
    observer.schedule(event_handler, path=MP3_FOLDER, recursive=False)
    observer.start()
    print(f"Monitoring '{MP3_FOLDER}' for new MP3 files...")

    try:
        while True:
            time.sleep(1)  # Keep the script running
    except KeyboardInterrupt:
        observer.stop()
        print("Stopping folder monitoring.")
    observer.join()

# -------------------- Main Execution --------------------

if __name__ == "__main__":
    monitor_folder()
