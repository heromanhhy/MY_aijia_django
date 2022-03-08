from django.urls import path,re_path

from . import views

app_name='users'

urlpatterns = [
    #用户注册
    path('register/',views.RegisterView.as_view() ,name='register'),
    #判断用户名是否重复
    re_path(r'^username/(?P<username>[a-zA-Z0-9_\u4e00-\u9fa5]{3,20})/count/$',views.UsernamecountView.as_view()),
    #判断手机号是否被注册过
    re_path(r'^mobile/(?P<mobile>[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8})/count/$',views.MobileView.as_view()),
    #用户登入
    path('login/',views.LoginView.as_view() ,name='login'),
    #用户忘记密码
    path('forgot_pwd/',views.ForgotpwdView.as_view() ,name='forgot_pwd'),
]
