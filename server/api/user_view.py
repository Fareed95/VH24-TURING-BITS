from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
import jwt
from jwt.exceptions import ExpiredSignatureError
from .models import User
from .authenticationserializer import Student_Serializer, Trainer_Serializer
from rest_framework import status

class UserView(APIView):
    @method_decorator(csrf_exempt)
    def get(self, request):
        token = request.headers.get('Authorization')  # Get the token directly

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms="HS256")
        except ExpiredSignatureError:
            raise AuthenticationFailed('Token expired!')
        except jwt.InvalidTokenError:
            raise AuthenticationFailed('Invalid token!')

        user = User.objects.filter(id=payload['id']).first()

        if not user:
            raise AuthenticationFailed('User not found!')

        # Check if the user is a trainer
        if user.trainer:
            serializer = Trainer_Serializer(user)
        else:
            serializer = Student_Serializer(user)

        return Response(serializer.data, status=status.HTTP_200_OK)
