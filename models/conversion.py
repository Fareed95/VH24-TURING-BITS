from pydub import AudioSegment

# Convert MP3 to WAV
audio = AudioSegment.from_mp3("models/audio.mp3")
audio.export("your_audio.wav", format="wav")
