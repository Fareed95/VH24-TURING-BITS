import os
from datetime import datetime
from pydub import AudioSegment
import speech_recognition as sr

# -------------------- Configuration --------------------

WAV_FOLDER = "wav_files"
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

def process_audio(mp3_path):
    # Convert MP3 to WAV
    filename = os.path.basename(mp3_path)
    name, _ = os.path.splitext(filename)

    # Create a timestamped filename for the WAV file
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    wav_filename = f"{name}_{timestamp}.wav"
    wav_path = os.path.join(WAV_FOLDER, wav_filename)

    # Convert MP3 to WAV
    convert_mp3_to_wav(mp3_path, wav_path)

    # Process the WAV file
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

    return abusive_timestamps, transcribed_text
