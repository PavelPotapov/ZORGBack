from django.db import models
from wagtail.blocks import StructBlock, CharBlock, ListBlock
from wagtail.images.blocks import ImageChooserBlock
from wagtail.embeds.blocks import EmbedBlock

from wagtailvideos.edit_handlers import VideoChooserPanel
from wagtailvideos.blocks import VideoChooserBlock


class PartnerBlock(StructBlock):
    link = CharBlock(
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        label="Ссылка на партнера"
    )
    image = ImageChooserBlock(label="Картинка для партнера", required=False)

    class Meta:
        icon = 'folder'
        template = 'blocks/ServiceBlock.html'
        form_classname = ''


class WorkCardBlock(StructBlock):
    title = CharBlock(
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        label="Заголовок должности в модальном окне"
    )
    date = CharBlock(
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        label="Дата"  # поле будет называть на русском в интерфейсе админа
    )
    short_title = CharBlock(
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        label="Название должности в карточке"
    )
    type_work = CharBlock(
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        label="Тип работы (Удаленно / и другие)"
    )
    message = CharBlock(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        label="Описание работы "
    )
    requirements = ListBlock(CharBlock(), label="Список требований")

    def find_requirements(self, value):
        requirements = []
        if value is not None:
            if "requirements" in dict(value):
                for element in dict(value)['requirements'].bound_blocks:
                    requirements.append(element.value)
                print(str(requirements).replace("'", "&quot;"), '!!')
                return str(requirements).replace("'", "&quot;")

    def render(self, value, context=None):
        return super().render(value, context={'requirements': self.find_requirements(value)})

    class Meta:
        icon = 'folder'
        template = 'blocks/WorkCardBlock.html'
        form_classname = ''


class GalleryBlock(StructBlock):
    # Видеофайл для блока свайпера
    video_gallery = VideoChooserBlock(
        label="Видеофайл для блока свайпера", required=False)
    # 'wagtailvideos.Video',
    # related_name='+',
    # null=True,
    # on_delete=models.SET_NULL
    # Картинка для блока свайпера
    image_gallery = ImageChooserBlock(
        label="Картинка для блока свайпера", required=False)
    # 'wagtailimages.Image',
    # blank=True, null=True,
    # on_delete=models.SET_NULL,
    # related_name='+',
    # verbose_name="Картинка для блока свайпера"
    video_url = EmbedBlock(label="URL видео", required=False)

    class Meta:
        icon = "media"
        template = "blocks/GalleryBlock.html"


class ServiceBlock(StructBlock):
    title = CharBlock(
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        label="Заголовок блока"
    )

    profile_title_first = CharBlock(
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        label="Заголовок. Первое слово профиля"
    )

    profile_title_second = CharBlock(
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        label="Заголовок. Второе слово профиля (зеленый текст)"
    )

    profile_message = CharBlock(
        max_length=1000,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        label="Подзаголовок. Описание "
    )

    image = ImageChooserBlock(
        label="Картинка для сервис блока", required=False)

    partners = ListBlock(
        PartnerBlock(), label="Список партнеров", min_num=1, max_num=6)

    title_under_partners = CharBlock(
        max_length=100,
        blank=True,  # можно ничего не вводить в это поле
        null=True,  # в бд может быть null
        # поле будет называть на русском в интерфейсе админа
        label="Зеленая подпись под партнерами "
    )

    def render(self, value, context=None):
        return super().render(value, context=context)

    class Meta:
        icon = 'folder'
        template = 'blocks/ServiceBlock.html'
        form_classname = ''
