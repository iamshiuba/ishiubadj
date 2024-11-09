from django.urls import path
from . import views

urlpatterns = [
    path('', views.videos, name='videos'),
]