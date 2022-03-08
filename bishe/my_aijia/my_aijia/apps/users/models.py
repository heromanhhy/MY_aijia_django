
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """用户注册模型"""
    
    mobile=models.CharField( max_length=11,unique=True,verbose_name='手机号')
    sms_code=models.CharField( max_length=4,unique=True,default='' ,verbose_name='验证码')
    # re_checkbox=models.CharField( max_length=11,unique=True,verbose_name='手机号')
    phone_number=models.CharField( max_length=6,unique=True, default='', verbose_name='手机验证码')

    class Meta:
        db_table="tb_users"
        verbose_name='用户'
        verbose_name_plural=verbose_name


    



