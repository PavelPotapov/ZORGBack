from django.shortcuts import render

# Create your views here.
from .models import PolicyPage
from django.shortcuts import render


def policy_view(request):
    obj = PolicyPage.objects.first()
    my_context = {
        "page": obj,
    }
    return render(request, 'policy/policy_page.html', my_context)