from django.urls import path
from .views import Session_Request_View

urlpatterns = [
    path('session-request/', Session_Request_View.as_view(), name='session-request'),
]
