from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register
from .models import PortfolioCard

# Register your models here.

class PortfolioCards(ModelAdmin):
    model = PortfolioCard
    menu_label = "Portfolio Cards"


modeladmin_register(PortfolioCards)

