# Create your views here.
from .models import WorkPage
from django.shortcuts import render


def hello_work(request):
    obj = WorkPage.objects.first()
    my_context = {
        "page": obj,
    }
    return render(request, 'work/work_page.html', my_context)
