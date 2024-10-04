import speech_recognition as sr
import numpy as np

# Define the abusive words
abusive_words = {'red', 'green', 'blue'}

# Initialize the speech recognizer
recognizer = sr.Recognizer()

# Load the audio file
audio_file = "models/your_audio.wav"

def transcribe_audio(file_path):
    with sr.AudioFile(file_path) as source:
        audio_data = recognizer.record(source)  # Read the entire audio file
        text = recognizer.recognize_google(audio_data)  # Recognize speech using Google Web Speech API
    return text

def find_abusive_words(text):
    words = text.split()
    timestamps = []  # List to hold timestamps

    # Iterate through the words to find abusive words and their positions
    for i, word in enumerate(words):
        if word.lower() in abusive_words:  # Check if the word is abusive
            timestamps.append((word, i))  # Append abusive word and its position

    return timestamps

def main():
    # Transcribe the audio
    transcribed_text = transcribe_audio(audio_file)
    print(f"Transcribed Text: {transcribed_text}")

    # Find abusive words
    abusive_timestamps = find_abusive_words(transcribed_text)

    # Calculate the timestamps in seconds
    total_duration = 8  # Total duration of the audio in seconds
    words_count = len(transcribed_text.split())

    # Calculate time per word
    time_per_word = total_duration / words_count if words_count > 0 else 0

    # Print the abusive words with their timestamps
    for word, index in abusive_timestamps:
        timestamp = index * time_per_word
        print(f"Abusive word '{word}' found at {timestamp:.2f} seconds.")

if __name__ == "__main__":
    main()
