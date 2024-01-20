from django.db import models
from django import forms

from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField, StreamField
from wagtail.blocks import CharBlock


from .blocks import WorkCardBlock, GalleryBlock, ServiceBlock
from wagtailvideos.blocks import VideoChooserBlock


class HomePage(Page):
    # поля в бд
    subtitle = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="Подзаголовок"  # поле будет называть на русском в интерфейсе админа
    )

    # блок сразу после слайдера заголовок на главной
    intro_title = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Заголовок. Блок после слайдера"
    )

    intro_subtitle = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст/Контент подзаголовка"
    )

    intro_about_us = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="Заголовок"  # поле будет называть на русском в интерфейсе админа
    )

    intro_about_us_subtitle = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст/Контент подзаголовка"
    )

    # Картинка для блока О НАС на главной
    image_about_us = models.ForeignKey(
        'wagtailimages.Image',
        blank=True, null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name="Картинка для первого блока О НАС"
    )

    our_projects_title = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Заголовок. Наши проекты"
    )

    browl_royale_text1 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст в блоке Browl Royale 1"
    )

    browl_royale_text2 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст в блоке Browl Royale 2"
    )

    browl_royale_text3 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст в блоке Browl Royale 3"
    )

    service_title = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Заголовок. Услуги"
    )

    work_title = models.CharField(
        max_length=100,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Заголовок карьера"
    )
    work_message = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст перед блоками с работой"
    )

    body_service = StreamField(
        [
            ('service_section', ServiceBlock(
                blank=True,
                verbose_name="Блоки c картинками партнеров на главной странице")),

        ], blank=True, use_json_field=True, verbose_name="Блок услуг на главной"
    )

    body_work = StreamField(
        [
            ('work_card', WorkCardBlock(
                blank=True,
                verbose_name="Блоки с карточкой работы на главной странице")),

        ], blank=True, use_json_field=True, verbose_name="Блок настройки карточек с работой"

    )

    body_gallery = StreamField(
        [
            ('gallery_card', GalleryBlock(
                null=True,
                blank=True,
                label="Блоки картинок / видео на главной странице свайпера")),

        ], blank=True, use_json_field=True, verbose_name="Блок настройки картинок / видео для свайпера"
    )

    image_carrier = models.ForeignKey(
        'wagtailimages.Image',
        blank=True, null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name="Картинка в конце страницы. Где форма обратной связи"
    )

    # поля в интерфейсе администратора
    content_panels = Page.content_panels + \
        [FieldPanel("body_gallery"), FieldPanel('subtitle'), FieldPanel('intro_title'), FieldPanel('intro_subtitle'), FieldPanel('intro_about_us'), FieldPanel('intro_about_us_subtitle'), FieldPanel(
            'image_about_us'), FieldPanel("our_projects_title"), FieldPanel("browl_royale_text1"), FieldPanel("browl_royale_text2"), FieldPanel("browl_royale_text3"), FieldPanel("service_title"), FieldPanel("body_service"), FieldPanel('work_title'), FieldPanel("work_message"), FieldPanel("body_work"), FieldPanel("image_carrier")]

    # настройка полей в других вкладках
    # promote_panels
    # settings_panels
    # promote_panels = []
    # settings_panels = []


class Form():
    pass
