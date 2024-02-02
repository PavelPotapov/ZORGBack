from home.models import Footer, LaptopMenu, Header
from django import template

register = template.Library()


@register.inclusion_tag("home/tags/footer.html", takes_context=True)
def footer_tag(context):
    return {
        "request": context['request'],
        "footer": Footer.objects.first()
    }


@register.inclusion_tag("home/tags/header.html", takes_context=True)
def header_tag(context):
    return {
        "request": context['request'],
        "header": Header.objects.first()
    }

@register.inclusion_tag("home/tags/laptop_menu.html", takes_context=True)
def laptopmenu_tag(context):
    return {
        "request": context['request'],
        "laptopmenu": LaptopMenu.objects.first()
    }
