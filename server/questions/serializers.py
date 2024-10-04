from rest_framework import serializers
from .models import Questions

class questions_serializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = ['id', 'questions','questions_image', 'tagname','user']