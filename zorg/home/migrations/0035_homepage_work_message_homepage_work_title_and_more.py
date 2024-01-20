# Generated by Django 5.0.1 on 2024-01-19 11:37

import wagtail.blocks
import wagtail.fields
import wagtail.images.blocks
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0034_alter_homepage_body_service'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='work_message',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Текст перед блоками с работой'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='work_title',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Заголовок карьера'),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='body_service',
            field=wagtail.fields.StreamField([('service_section', wagtail.blocks.StructBlock([('title', wagtail.blocks.CharBlock(blank=True, label='Заголовок блока', null=True)), ('profile_title_first', wagtail.blocks.CharBlock(blank=True, label='Заголовок. Первое слово профиля', null=True)), ('profile_title_second', wagtail.blocks.CharBlock(blank=True, label='Заголовок. Второе слово профиля (зеленый текст)', null=True)), ('profile_message', wagtail.blocks.CharBlock(blank=True, label='Подзаголовок. Описание ', max_length=1000, null=True)), ('image', wagtail.images.blocks.ImageChooserBlock(label='Картинка для сервис блока', required=False)), ('partners', wagtail.blocks.ListBlock(wagtail.blocks.StructBlock([('link', wagtail.blocks.CharBlock(blank=True, label='Ссылка на партнера', null=True)), ('image', wagtail.images.blocks.ImageChooserBlock(label='Картинка для партнера', required=False))]), label='Список партнеров', max_num=6, min_num=1)), ('title_under_partners', wagtail.blocks.CharBlock(blank=True, label='Зеленая подпись под партнерами ', max_length=100, null=True))], blank=True, verbose_name='Блоки c картинками партнеров на главной странице'))], blank=True, use_json_field=True, verbose_name='Блок услуг на главной'),
        ),
    ]
