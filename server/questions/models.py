from django.db import models
from api.models import User
# Create your models here.

class Questions(models.Model):
    questions =  models.TextField()
    tagname = models.CharField( max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='questions')
    questions_image = models.ImageField( upload_to='question_image',null=True, blank=True)
    request = models.BooleanField(default=False)


    def __str__(self) :
        return self.questions