from django.db import models
from django import forms

from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField, StreamField
from wagtail.blocks import CharBlock
from work.blocks import AdvantageBlock

from wagtailvideos.blocks import VideoChooserBlock

from wagtail.snippets.models import register_snippet


class StudiaPage(Page):
    # поля в бд
    subtitle = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="Подзаголовок зеленый текст"  # поле будет называть на русском в интерфейсе админа
    )
    subtitle2 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Подзаголовок белый текст"
    )
    # Картинка команды
    image_about_us = models.ForeignKey(
        'wagtailimages.Image',
        blank=True, null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name="Картинка первого блока"
    )
    text = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Основной текст секции о нас"
    )
    text2 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Подзаголовок секции о нас"
    )

    title1 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Заголовок секции деятельность"
    )

    # пункты преимуществ
    body_advantage = StreamField(
        [
            ('advantage_section', AdvantageBlock(
                blank=True,
                verbose_name="Блоки c преимуществами  работы")),

        ], blank=True, use_json_field=True, verbose_name="Блок услуг на главной"
    )

    text3 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="текст стрелки у кнопки"
    )

    text4 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="текст кнопки"
    )

    link = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="ссылка куда ведет кнопка"
    )

    title2 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Заголовок команды"
    )

    # Картинка команды
    image_team1 = models.ForeignKey(
        'wagtailimages.Image',
        blank=True, null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name="Картинка команды 1"
    )

    title_image1 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст под картинкой 1"
    )

    # Картинка команды
    image_team2 = models.ForeignKey(
        'wagtailimages.Image',
        blank=True, null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name="Картинка команды 2"
    )

    title_image2 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст под картинкой 2"
    )

    # Картинка команды
    image_team3 = models.ForeignKey(
        'wagtailimages.Image',
        blank=True, null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name="Картинка команды 3"
    )

    title_image3 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст под картинкой 3"
    )

    title3 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст под картинками команды"
    )

    text_arrow_btn = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст стрелки перед кнопкой"
    )

    text_btn = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст кнопки"
    )

    link_btn = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Ссылка для кнопки"
    )


    content_panels = Page.content_panels + \
        [FieldPanel("subtitle"), FieldPanel(
            "subtitle2"), FieldPanel("text"), FieldPanel("text2"),FieldPanel("image_about_us"), FieldPanel("title1"), FieldPanel("body_advantage"), FieldPanel("text3"), FieldPanel("text4"), FieldPanel("link"), FieldPanel("title2"), FieldPanel("image_team1"), FieldPanel("title_image1"), FieldPanel("image_team2"), FieldPanel("title_image2"), FieldPanel("image_team3"), FieldPanel("title_image3"), FieldPanel("title3"), FieldPanel("text_arrow_btn"), FieldPanel("text_btn"), FieldPanel("link_btn")]
