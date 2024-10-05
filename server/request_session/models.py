from django.db import models
from api.models  import User
# Create your models here.

class Session_Request_model(models.Model):
    tagname = models.CharField( max_length=50)
    user =  models.ForeignKey(User, on_delete=models.CASCADE, related_name='session_request')

    def __str__(self):
        return self.tagname