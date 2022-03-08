
from tkinter import N
from django.contrib import admin
from django.urls import path,include

# url交通中转通向apps下的每个子app的urls
urlpatterns = [

    path('admin/', admin.site.urls),
    # 用户模块
    path('users/', include('users.urls', namespace='users')),
    # 首页模块
    path('', include('contents.urls',namespace='contents')),
    
]
