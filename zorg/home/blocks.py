
from wagtail.blocks import StructBlock, CharBlock, ListBlock
from wagtail.images.blocks import ImageChooserBlock


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
