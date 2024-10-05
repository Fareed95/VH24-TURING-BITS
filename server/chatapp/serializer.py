from rest_framework import serializers
from .models import ChatRoom, Message
from api.models import User

class ChatRoomSerializer(serializers.ModelSerializer):
    student = serializers.SlugRelatedField(slug_field='email', queryset=User.objects.all())
    trainer = serializers.SlugRelatedField(slug_field='email', queryset=User.objects.all())

    class Meta:
        model = ChatRoom
        fields = ['id', 'name', 'student', 'trainer']

class MessageSerializer(serializers.ModelSerializer):
    sender = serializers.SlugRelatedField(slug_field='email', queryset=User.objects.all())

    class Meta:
        model = Message
        fields = ['id', 'room', 'sender', 'content', 'timestamp']
