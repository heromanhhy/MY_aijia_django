from django.shortcuts import render
from django.views import View

class IndexView(View):

    def get(self , request):
        """提供首页页面"""
        return render(request, 'index.html')


class LoginViews(View):
    def get(self , request):
        """提供登入页面"""
        return render(request, 'login.html')