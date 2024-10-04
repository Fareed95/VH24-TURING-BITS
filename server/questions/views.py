from django.shortcuts import render
from rest_framework.viewsets import  ModelViewSet
from . models import Questions
from  . serializers import questions_serializer
# Create your views here.

class questions_viewset(ModelViewSet):
    queryset = Questions.objects.all()
    serializer_class = questions_serializer