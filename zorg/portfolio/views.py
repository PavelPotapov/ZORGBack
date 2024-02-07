from django.shortcuts import render
from .models import PortfolioPage, PortfolioCard
import json


def create_categories():
    pass

def create_styles():
    pass


def create_datajs_detail():
    '''{"images":["../img/team.png","../img/team.png","../img/team.png","../img/team.png","../img/team.png"],"logo":"../img/team.png","title":"Brawl Royale","date":"25.05.2022","text":"Lorem ipsum dolor sit amet consectetur. Massa id lobortis viverra interdum."}'''

    '''
        {'images': ['/media/images/FX62mYgFQZI.jpg', '/media/images/Screenshot_3.png', '/media/images/vaveda_qpwMDDJ.png'], 'logo': '/media/images/team_tBbnQxZ.png', 'date': '25.06.2023', 'text': 'Это новая игра123', 'title': 'Brawl Stars'}
    '''
    cards = PortfolioCard.objects.all()
    result_dict = {}

    # result = '{"images":["'
    # if (card.image_one):
    #     result += card.image_one + '"'
    # if (card.image_two):
    #     result += ',"' + card.image_two + '"'
    # if (card.image_three):
    #     result += ',"' + card.image_three + '"'
    for card in cards:
        images = []
        if (card.image_one):
            images.append(card.image_one.url)
        if (card.image_two):
            images.append(card.image_two.url)
        if (card.image_three):
            images.append(card.image_three.url)

        res = {
            "images": images,
            "logo": card.image_logo.url,
            "date": card.date,
            "text": card.text,
            "title": card.title,
        }
        
        result_dict[card.title] = json.dumps(res)
   
    return result_dict
   


# Create your views here.
def hello_portfolio(request):
    field_name = 'body'
    obj = PortfolioPage.objects.first()
    cards = PortfolioCard.objects.all()
    for card in cards:
        print(card.title, 'title')
        print(card.date, 'date')
        print(card.text, 'text')
        print(card.style, 'style')
        print(card.categories, 'categories')
        print(card.image_logo, 'image_logo')
        print(card.image_one, 'image_one')
        print(card.image_two, 'image_two')
        print(card.image_three, 'image_three')
        print("!!!!")

    result_dict = create_datajs_detail()
    print(type(result_dict), '!!!!4')
    # objects = obj.body
    # field_value = getattr(obj, field_name)
    my_context = {
        "page": obj,
        "some": "test",
        "cards": cards,
        "result_dict": result_dict,
    }
    return render(request, 'portfolio/portfolio_page.html', my_context)

