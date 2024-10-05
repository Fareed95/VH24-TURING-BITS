from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import BotResponse
from .serializers import BotResponseSerializer
from .bot_algo import bot_gemini
from api.models import User
from django.shortcuts import get_object_or_404

class BotResponseView(APIView):
    # def get(self, request):
    #     bot_responses = BotResponse.objects.all()
    #     serializer = BotResponseSerializer(bot_responses, many=True)
    #     return Response(serializer.data)

    def post(self, request):
        question = request.data.get('question')
        user_email = request.data.get('user_email')

        if not question:
            return Response({'error': 'Question is required'}, status=status.HTTP_400_BAD_REQUEST)
        if not user_email:
            return Response({'error': 'User email is required'}, status=status.HTTP_400_BAD_REQUEST)

        user = get_object_or_404(User, email=user_email)

        bot_prompt = f"{question} Answer the question within 50 words"

        bot_response_text = bot_gemini(bot_prompt, user.id)

        bot_response = BotResponse.objects.create(question=question, bot_response=bot_response_text, user=user)

        serializer = BotResponseSerializer(bot_response)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

