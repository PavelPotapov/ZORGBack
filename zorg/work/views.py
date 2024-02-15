# Create your views here.
from .models import WorkPage
from django.shortcuts import render


def hello_work(request):
    print("DAAAAAAAAAAAA !!!!", request)
    field_name = 'body'
    obj = WorkPage.objects.first()
    # objects = obj.body
    # field_value = getattr(obj, field_name)
    my_context = {
        "page": obj,
    }
    return render(request, 'work/work_page.html', my_context)
