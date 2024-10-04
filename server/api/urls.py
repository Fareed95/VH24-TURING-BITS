from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . authentication_views import TrainerRegisterView,StudentRegisterView, LoginView, LogoutView, PasswordResetView, PasswordResetRequestView
from . user_view import UserView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('student/register',StudentRegisterView.as_view()),
    path('trainer/register',StudentRegisterView.as_view()),
    path('login',LoginView.as_view()),
    path('user',UserView.as_view()),
    path('logout',LogoutView.as_view()),
    path('password-reset-request/', PasswordResetRequestView.as_view(), name='password-reset-request'),
    path('password-reset/', PasswordResetView.as_view(), name='password-reset'),
]

urlpatterns  += staticfiles_urlpatterns()