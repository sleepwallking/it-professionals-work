from django.shortcuts import render
from rest_framework.views import APIView
from .models import Worker
from .serializers import WorkerSerializer
from rest_framework.response import Response


class WorkerView(APIView):
    def get(self, request):
        output = [
            {
                'email': output.email,
                'nickname': output.nickname,
                'first_name': output.first_name,
                'last_name': output.last_name,
                'direction': output.direction,
                'level': output.level,
                'price': output.price,
                'status': output.status,
                'skills': output.skills,
                'age': output.age,
                'location': output.location,
            } for output in Worker.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = WorkerSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
