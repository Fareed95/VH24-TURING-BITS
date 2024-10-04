from rest_framework import serializers
from .models import Session_Request_model, User
from api.authenticationserializer  import Trainer_Serializer

class Session_Request_Serializer(serializers.ModelSerializer):
    list_of_mentors = serializers.SerializerMethodField()

    class Meta:
        model = Session_Request_model
        fields = ['id', 'tagname', 'user', 'list_of_mentors']

    # This method will provide the list of mentors
    def get_list_of_mentors(self, obj):
        mentors = User.objects.filter(trainer=True, domain=obj.tagname)
        return Trainer_Serializer(mentors, many=True).data  # Serialize the mentors