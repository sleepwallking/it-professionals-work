from rest_framework import serializers
from .models import Worker


class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = ['email',
                  'nickname',
                  'first_name',
                  'last_name',
                  'direction',
                  'level',
                  'price',
                  'status',
                  'skills',
                  'age',
                  'location']
