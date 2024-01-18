from django.http import HttpResponse
from .models import HomePage
from .blocks import WorkCardBlock
from django.shortcuts import render


def hello_world(request):
    field_name = 'body'
    obj = HomePage.objects.first()
    # objects = obj.body
    # field_value = getattr(obj, field_name)
    my_context = {
        "page": obj,
    }
    return render(request, 'home/home_page.html', my_context)
