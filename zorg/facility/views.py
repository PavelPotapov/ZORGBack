# Create your views here.
from django.http import HttpResponse
from .models import FacilityPage
from django.shortcuts import render


def hello_facility(request):
    obj = FacilityPage.objects.first()
    # objects = obj.body
    # field_value = getattr(obj, field_name)
    my_context = {
        "page": obj,
    }
    return render(request, 'facility/facility_page.html', my_context)
