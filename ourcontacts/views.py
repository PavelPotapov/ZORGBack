from django.shortcuts import render

# Create your views here.
from .models import ContactPage
from django.shortcuts import render


def contacts_view(request):
    obj = ContactPage.objects.first()
    my_context = {
        "page": obj,
    }
    return render(request, 'ourcontacts/ourcontacts_page.html', my_context)