from django.db import models

from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.fields import StreamField
from work.blocks import AdvantageBlock



class FacilityPage(Page):
    # поля в бд
    subtitle = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Подзаголовок зеленый текст"
    )
    subtitle2 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Подзаголовок белый текст"
    )
    # Картинка команды
    image_facility = models.ForeignKey(
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
        verbose_name="Основной текст первого блока"
    )

    # пункты преимуществ
    body_advantage = StreamField(
        [
            ('advantage_section', AdvantageBlock(
                blank=True,
                verbose_name="Блоки c услугами")),

        ], blank=True, use_json_field=True, verbose_name="Блоки c услугами"
    )

    process_text = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Белый текст процесс"
    )

    process_text2 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Зеленый текст процесс"
    )

    step1 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Процесс шаг 1"
    )
    step2 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Процесс шаг 2"
    )
    step3 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Процесс шаг 3"
    )
    step4 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Процесс шаг 4"
    )
    step5 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Процесс шаг 5"
    )
    step6 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Процесс шаг 6"
    )
    step7 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Процесс шаг 7"
    )

    text2 = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст под процессом"
    )
    name_owner = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст имя основателя"
    )
    subtitle_name_owner = models.CharField(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        verbose_name="Текст под именем основателя"
    )
    # Картинка основателя
    image_owner = models.ForeignKey(
        'wagtailimages.Image',
        blank=True, null=True,
        on_delete=models.SET_NULL,
        related_name='+',
        verbose_name="Картинка основателя"
    )

    content_panels = Page.content_panels + \
        [FieldPanel("subtitle"), FieldPanel(
            "subtitle2"), FieldPanel("text"), FieldPanel("image_facility"), FieldPanel("body_advantage"), FieldPanel("process_text"), FieldPanel("process_text2"), FieldPanel("step1"), FieldPanel("step2"), FieldPanel("step3"), FieldPanel("step4"), FieldPanel("step5"), FieldPanel("step6"), FieldPanel("step7"), FieldPanel("text2"), FieldPanel("name_owner"),  FieldPanel("subtitle_name_owner"), FieldPanel("image_owner")]
    


