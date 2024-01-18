from django.db import models

from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField, StreamField


from .blocks import WorkCardBlock


class HomePage(Page):
    # поля в бд
    subtitle = models.CharField(
        max_length=100,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="Подзаголовок"  # поле будет называть на русском в интерфейсе админа
    )

    # Картинка для блока О НАС на главной
    image_about_us = models.ForeignKey(
        'wagtailimages.Image',
        blank=True, null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name="Картинка для первого блока О НАС"
    )

    body = StreamField(
        [('work_card', WorkCardBlock())], blank=True, use_json_field=True, verbose_name="Блоки с карточкой работы на главной странице"
    )

    # поля в интерфейсе администратора
    content_panels = Page.content_panels + \
        [FieldPanel('subtitle'), FieldPanel(
            'image_about_us'), FieldPanel("body")]

    # def get_context_data(self, **kwargs):
    #     context = super(HomePage, self).get_context_data(**kwargs)
    #     context['test'] = 'test'
    #     context['form'] = 'form'
    #     return context
    # настройка полей в других вкладках
    # promote_panels
    # settings_panels
    # promote_panels = []
    # settings_panels = []
