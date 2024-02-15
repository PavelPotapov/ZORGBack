from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.fields import RichTextField, StreamField
from .blocks import WorkCardBlock, AdvantageBlock


class WorkPage(Page):
    # поля в бд
    title1 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="Белый текст заголовка"  # поле будет называть на русском в интерфейсе админа
    )

    title2 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        verbose_name="Зеленый текст заголовка"  # поле будет называть на русском в интерфейсе админа
    )

    subtitle = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Подзаголовок"
    )

    # Картинка для блока на главной
    image_work = models.ForeignKey(
        'wagtailimages.Image',
        blank=True, null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name="Картинка первого блока"
    )

    # пункты преимуществ работы
    body_advantage = StreamField(
        [
            ('advantage_section', AdvantageBlock(
                blank=True,
                verbose_name="Блоки c преимуществами  работы")),

        ], blank=True, use_json_field=True, verbose_name="Блок услуг на главной"
    )

    body_work = StreamField(
        [
            ('advantage_section', WorkCardBlock(
                blank=True,
                verbose_name="Блоки c картинками партнеров на главной странице")),

        ], blank=True, use_json_field=True, verbose_name="Блок услуг на главной"
    )

    vacancy_title = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Длинный текст перед кнопкой"
    )

    get_contact_title = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Короткий текст перед кнопкой зеленый"
    )

    text = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="текст"
    )

    text2 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="текст 2"
    )

    text_btn = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="текст кнопки"
    )

    image_contact = models.ForeignKey(
        'wagtailimages.Image',
        blank=True, null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name="Картинка для блока контактов"
    )

    content_panels = Page.content_panels + \
        [FieldPanel("title1"), FieldPanel("title2"),
         FieldPanel("subtitle"),  FieldPanel("image_work"),  FieldPanel("body_advantage"),  FieldPanel("body_work"), FieldPanel("vacancy_title"), FieldPanel("get_contact_title"), FieldPanel("text"), FieldPanel("text2"), FieldPanel("text_btn"), FieldPanel("image_contact")]

    # настройка полей в других вкладках
    # promote_panels
    # settings_panels
    # promote_panels = []
    # settings_panels = []
