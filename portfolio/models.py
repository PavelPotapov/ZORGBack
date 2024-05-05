from django.db import models
from django import forms

from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField, StreamField
from wagtail.blocks import CharBlock


from wagtailvideos.blocks import VideoChooserBlock

from wagtail.snippets.models import register_snippet



# Create your models here.
class PortfolioCard(models.Model):
    title = models.CharField(blank=True, null=True, max_length=150)
    date =  models.CharField(blank=True, null=True, max_length=150)
    text = models.CharField(blank=True, null=True, max_length=150)
    
    style = models.CharField(blank=True, null=True, max_length=150)
    categories = models.CharField(blank=True, null=True, max_length=150)

    image_logo =  models.ImageField(upload_to='images/')
    image_one = models.ImageField(upload_to='images/')
    image_two = models.ImageField(upload_to='images/')
    image_three = models.ImageField(upload_to='images/')

    order_for_main = models.IntegerField(null=True, blank=True)
    


class PortfolioPage(Page):
    content_panels = Page.content_panels
