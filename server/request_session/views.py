from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Session_Request_model
from api.models import User
from .serializers import Session_Request_Serializer

class Session_Request_View(APIView):
    def post(self, request):
        tagname = request.data.get('tagname')  # Get the tagname from the POST request
        user_id = request.data.get('user')  # Get the user ID from the POST request
        # Ensure both tagname and user are provided
        if not tagname or not user_id:
            return Response({"error": "tagname and user are required"}, status=status.HTTP_400_BAD_REQUEST)

        # Get the user object
        user = get_object_or_404(User, id=user_id)

        # Create a session request (or process it further if needed)
        session_request = Session_Request_model.objects.create(tagname=tagname, user=user)

        # Serialize the session request, including the list of mentors
        serializer = Session_Request_Serializer(session_request)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
