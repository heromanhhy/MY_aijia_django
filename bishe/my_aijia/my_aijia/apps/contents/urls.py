from django.urls import path

from . import views

app_name='contents'

urlpatterns = [
    #用户注册
    path('index/',views.IndexView.as_view() ,name='index'),
]