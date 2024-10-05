from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
import jwt
import datetime
from django.utils import timezone
from .models import User
from .authenticationserializer import Student_Serializer, Trainer_Serializer
from django.core.mail import send_mail
from django.utils.crypto import get_random_string
from django.core.cache import cache
import ssl
from django.template.loader import render_to_string
from django.utils.html import strip_tags

# Disable SSL verification
ssl._create_default_https_context = ssl._create_unverified_context

class StudentRegisterView(APIView):
    def post(self, request):
        email = request.data.get('email')
        user_exists = User.objects.filter(email=email).exists()

        # If the user already exists, return an error response
        if user_exists:
            return Response({'error': 'Email is already in use'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = Student_Serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()  # Save the user from the serializer
            # You can add extra logic here, e.g., sending an email
            return Response({'message': 'User registered successfully'})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TrainerRegisterView(APIView):
    def post(self, request):
        email = request.data.get('email')
        user_exists = User.objects.filter(email=email).exists()

        if user_exists:
            return Response({'error': 'Email is already in use'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = Trainer_Serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()  # Save the user from the serializer
            # You can add extra logic here, e.g., sending an email
            return Response({'message': 'Trainer registered successfully'})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password')

        if not user.is_active:
            raise AuthenticationFailed('Account not activated. Please verify your email.')

        payload = {
            'id': user.id,
            'trainer': user.trainer,  # Include trainer field
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        return Response({
            'jwt': token,  # No "Bearer" prefix
            'trainer': user.trainer,  # Include trainer field
        })


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': "Logged out successfully"
        }
        return response
