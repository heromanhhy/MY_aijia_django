from cgitb import html
from multiprocessing import context
from django.shortcuts import render,redirect
from django.urls import reverse
from django.contrib.auth import login
from django.template import RequestContext
from .forms import RegisterForm
from django.views import View
from .models import User
from django import http
import time
from .models import *

# 注册
class RegisterView(View):
    """用户注册"""
    def get(self , request):
        """提供用户注册页面"""
        return render(request, 'register.html')

    def post(self, request):
        """提供用户注册业务逻辑"""
        #校验参数
        register_form=RegisterForm(request.POST)

        if register_form.is_valid():
            #提取用户注册参数
            username=register_form.cleaned_data.get('username')
            mobile=register_form.cleaned_data.get('mobile')
            password=register_form.cleaned_data.get('password')
            sms_code=register_form.cleaned_data.get('sms_code')
            re_checkbox=register_form.cleaned_data.get('re_checkbox')
            phone_number=register_form.cleaned_data.get('phone_number')

            #提取到的参数保存到数据库中
            try:
                # user=insertUser(username,mobile,password,sms_code,phone_number)
                user=User.objects.create_user(password=password,username=username,mobile=mobile,sms_code=sms_code,phone_number=phone_number)
            except Exception as e:
                time.sleep(5)
                return render(request,'register.html' , {'register_error':'注册失败！'})
                
            #状态保持
            time.sleep(4)
            login(request, user)
            #相应结果
        
            return redirect(reverse('users:login'))
        else:
            print(123)
            context = {
                'forms_error':register_form.errors.get_json_data()
            }
            time.sleep(3)
            # 注册失败就返回到注册页
            return render(request, 'register.html', {'context':context})

# 用户名是否重复
class UsernamecountView(View):
    """判断用户名是否被注册"""

    def get(self, request,username):
        # 返回用户名是否重复 求和count()
        
        count=User.objects.filter(username=username).count()#

        return http.JsonResponse({'code':200,'errmsg':'ok','count':count})

#手机是否被注册
class MobileView(View):
    """手机号是否被注册"""
    def get(self, request,mobile):

        count=User.objects.filter(mobile=mobile).count()#

        return http.JsonResponse({'code':200,'errmsg':'手机是否被注册？？？','count':count})

# 提供登入页面
class LoginView(View):
    """用户登入"""
    def get(self , request):
        """提供用户注册页面"""
        return render(request, 'login.html')

#找回密码
class ForgotpwdView(View):
    """用户密码找回"""
    def get(self , request):
        """提供用户找回密码页面"""
        return render(request , 'forgot_pwd.html')

