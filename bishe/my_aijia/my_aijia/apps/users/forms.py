
from django import forms

class RegisterForm(forms.Form):
    #用户名、手机号、密码填写
    username = forms.CharField(max_length=20 , min_length=3,required=True , error_messages={'max_length':'用户名最大长度不能超过20', 'min_length':'用户名最少也要大于3个'  ,'required':'用户名必填'})
    #手机号
    mobile=forms.CharField(max_length=11 , min_length=11,required=True , error_messages={'max_length':'手机号只能是11位数', 'min_length':'手机号只能是11位数' ,'required':'手机号必填'})
    password=forms.CharField(max_length=20 , min_length=6 , required=True ,  error_messages={'max_length':'密码已经超过20位', 'min_length':'密码不能少于6位' ,'required':'密码必填'})
    password2=forms.CharField(max_length=20 , min_length=6 , required=True ,  error_messages={'max_length':'密码已经超过20位', 'min_length':'密码不能少于6位' ,'required':'密码必填'})
    # 图文验证码
    sms_code=forms.CharField(max_length=4 , min_length=4 , required=True)
    # re_checkbox=forms.CharField()
    phone_number=forms.CharField(max_length=6 , min_length=6 , required=True ,error_messages={'max_length':'密码已经超过6位', 'min_length':'密码不能少于6位' ,'required':'手机验证码必填'})

    def clean(self):
        #判断两次密码是否输入正确！
        cleaned_data= super().clean()
        password=cleaned_data.get('password')
        password2=cleaned_data.get('password2')

        if password != password2:

            raise forms.ValidationError('两次密码输入不正确！')

        return cleaned_data



