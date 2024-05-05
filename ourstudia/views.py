from django.http import HttpResponse
from .models import StudiaPage
from django.shortcuts import render


def hello_studia(request):
    obj = StudiaPage.objects.first()
    # objects = obj.body
    # field_value = getattr(obj, field_name)
    my_context = {
        "page": obj,
    }
    return render(request, 'ourstudia/studia_page.html', my_context)
