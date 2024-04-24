from django.db import models

# Create your models here.
from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField, StreamField



class PolicyPage(Page):
    # поля в бд
    title1 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="текст заголовка"  # поле будет называть на русском в интерфейсе админа
    )

    title2 = RichTextField(
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="Подзаголовок"  # поле будет называть на русском в интерфейсе админа
    )


    content_panels = Page.content_panels + \
        [FieldPanel("title1"), FieldPanel("title2")]

    # настройка полей в других вкладках
    # promote_panels
    # settings_panels
    # promote_panels = []
    # settings_panels = []
