from django.contrib import admin
from django.urls import path, include
from django.urls import re_path as url
from workers.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', WorkerView.as_view(), name='latex')
]
