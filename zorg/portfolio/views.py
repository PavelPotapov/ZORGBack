from django.shortcuts import render
from .models import PortfolioPage, PortfolioCard
import json
from django.http import HttpResponse


def create_categories():
    cards = PortfolioCard.objects.all()
    categories = []
    for card in cards:
        if not card.categories in categories:
            categories.append(card.categories)
    return categories

def create_styles():
    cards = PortfolioCard.objects.all()
    styles = []
    for card in cards:
        if not card.style in styles:
            styles.append(card.style)
    return styles


def create_datajs_detail(filter=None):
    '''{"images":["../img/team.png","../img/team.png","../img/team.png","../img/team.png","../img/team.png"],"logo":"../img/team.png","title":"Brawl Royale","date":"25.05.2022","text":"Lorem ipsum dolor sit amet consectetur. Massa id lobortis viverra interdum."}'''
    '''
        {'images': ['/media/images/FX62mYgFQZI.jpg', '/media/images/Screenshot_3.png', '/media/images/vaveda_qpwMDDJ.png'], 'logo': '/media/images/team_tBbnQxZ.png', 'date': '25.06.2023', 'text': 'Это новая игра123', 'title': 'Brawl Stars'}
    '''

    if filter is None:
        cards = PortfolioCard.objects.all()
    else:
        try: 
            cards = PortfolioCard.objects.filter(title=filter)
        except: 
            cards = PortfolioCard.objects.all()

    result_dict = {}
    
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
   
def createObjectForDataJS(card):
    images = []
    if (card.image_one):
        images.append(card.image_one.url)
    if (card.image_two):
        images.append(card.image_two.url)
    if (card.image_three):
        images.append(card.image_three.url)
    return {
        "images": images,
        "logo": card.image_logo.url,
        "date": card.date,
        "text": card.text,
        "title": card.title,
    }

def filter(filters:list=None):
    result_cards = []
    if (filters):
        for filter in filters:
            cards = PortfolioCard.objects.filter(style=filter)
            if cards:
                for card in cards:
                    result_cards.append(createObjectForDataJS(card))

            cards = PortfolioCard.objects.filter(categories=filter)
            if cards:
                for card in cards:
                    result_cards.append(createObjectForDataJS(card))
    else:
        cards = PortfolioCard.objects.all()
        if cards:
            for card in cards:
                result_cards.append(createObjectForDataJS(card))
    return result_cards

# Create your views here.
def hello_portfolio(request):
    field_name = 'body'
    obj = PortfolioPage.objects.first()
    cards = PortfolioCard.objects.all()

    result_dict = create_datajs_detail()
    categories = create_categories()
    styles = create_styles()
    startconfig = {}
    try:
        if (request.GET['title']):
            #значит надо открывать модальное окно
            startconfig = create_datajs_detail(request.GET['title'])
    except:
        pass
    # objects = obj.body
    # field_value = getattr(obj, field_name)
    my_context = {
        "page": obj,
        "some": "test",
        "cards": cards,
        "result_dict": result_dict,
        "categories": categories,
        "styles": styles,
        "startconfig": startconfig
    }
    return render(request, 'portfolio/portfolio_page.html', my_context)


def filter_portfolio(request):
    # a = [{'images': ['/media/images/FX62mYgFQZI.jpg', '/media/images/Screenshot_3.png', '/media/images/vaveda_qpwMDDJ.png'], 'logo': '/media/images/team_tBbnQxZ.png', 'date': '25.06.2023', 'text': 'Это новая игра123', 'title': 'Brawl Stars'},
    #      {'images': ['/media/images/FX62mYgFQZI.jpg', '/media/images/Screenshot_3.png', '/media/images/vaveda_qpwMDDJ.png'], 'logo': '/media/images/team_tBbnQxZ.png', 'date': '25.06.2023', 'text': 'Это новая игра123', 'title': 'Brawl Stars'}]
    if (request.method == 'POST'):
        filters = []
        for key in request.POST.keys():
            if (key != "csrfmiddlewaretoken"):
                filters.append(key)
        # print(json.dumps(filter(filters)), 'Отфильтрованные данные')
        json_stuff = json.dumps(filter(filters))
        return HttpResponse(json_stuff, content_type="application/json")
    else:
        return 404




