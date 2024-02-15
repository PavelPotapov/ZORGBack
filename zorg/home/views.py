from django.http import HttpResponse
from .models import HomePage
from portfolio.models import PortfolioCard
from .blocks import WorkCardBlock
from django.shortcuts import render


def get_card_for_homepage():
    cards = PortfolioCard.objects.filter(
        order_for_main__isnull=False).order_by('order_for_main')
    return cards

def hello_world(request):
    field_name = 'body'
    obj = HomePage.objects.first()
    
    cards = get_card_for_homepage()
    # objects = obj.body
    # field_value = getattr(obj, field_name)
    my_context = {
        "page": obj,
        "portfoliocards": cards
    }
    return render(request, 'home/home_page.html', my_context)
