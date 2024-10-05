from django.db import models
from datetime import datetime

class Room(models.Model):
    name = models.CharField(max_length=1000)

class Message(models.Model):
    value = models.CharField(max_length=1000000, default='', null=True, blank=True)
    date = models.DateTimeField(default=datetime.now, null=True, blank=True)
    user = models.CharField(max_length=1000000, default='', null=True, blank=True)
    room = models.CharField(max_length=1000000, default='', null=True, blank=True)

    # All fields now:
    # - have a default value (empty string for CharFields, datetime.now for DateTimeField)
    # - allow null values in the database with `null=True`
    # - are optional in forms with `blank=True`
