from django.db import models

# Create your models here.
from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField, StreamField



class ContactPage(Page):
    # поля в бд
    phone = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="телефон"  # поле будет называть на русском в интерфейсе админа
    )

    link_phone = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="ссылка в формате tel:+7.."  # поле будет называть на русском в интерфейсе админа
    )

    email = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="email"  # поле будет называть на русском в интерфейсе админа
    )

    email_phone = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="ссылка в формате mailto:info@mail.ru"  # поле будет называть на русском в интерфейсе админа
    )

    title1 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="Заголовок"  # поле будет называть на русском в интерфейсе админа
    )

    subtitle = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="Подзаголовок"  # поле будет называть на русском в интерфейсе админа
    )

   
    content_panels = Page.content_panels + \
        [FieldPanel("title1"), FieldPanel("subtitle"), FieldPanel("phone"), FieldPanel("link_phone"),  FieldPanel("email"), FieldPanel("email_phone")]

    # настройка полей в других вкладках
    # promote_panels
    # settings_panels
    # promote_panels = []
    # settings_panels = []
