from django.db.models.query import QuerySet
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Member
from .serializers import MemberSerializer, MemberSimpleSerializer

# Create your views here.
class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

    def list(self, request, *args, **kwargs):
        queryset = Member.objects.all()
        serializer = MemberSimpleSerializer(queryset, many=True)

        return Response(serializer.data)
