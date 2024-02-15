# Generated by Django 5.0.1 on 2024-02-15 12:46

import django.db.models.deletion
import wagtail.blocks
import wagtail.fields
import wagtail.images.blocks
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ourstudia', '0001_initial'),
        ('wagtailimages', '0025_alter_image_file_alter_rendition_file'),
    ]

    operations = [
        migrations.AddField(
            model_name='studiapage',
            name='body_advantage',
            field=wagtail.fields.StreamField([('advantage_section', wagtail.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(label='Картинка для блока преимуществ', required=False)), ('title', wagtail.blocks.CharBlock(blank=True, label='Заголовок белый текст', null=True)), ('title2', wagtail.blocks.CharBlock(blank=True, label='Заголовок зеленый текст', null=True)), ('subtitle', wagtail.blocks.CharBlock(blank=True, label='Текст', null=True))], blank=True, verbose_name='Блоки c преимуществами  работы'))], blank=True, use_json_field=True, verbose_name='Блок услуг на главной'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='image_team1',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.image', verbose_name='Картинка команды 1'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='image_team2',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.image', verbose_name='Картинка команды 2'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='image_team3',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.image', verbose_name='Картинка команды 3'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='link',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='ссылка куда ведет кнопка'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='link_btn',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Ссылка для кнопки'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='subtitle2',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Подзаголовок белый текст'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='text',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Основной текст секции о нас'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='text2',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Подзаголовок секции о нас'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='text3',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='текст стрелки у кнопки'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='text4',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='текст кнопки'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='text_arrow_btn',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Текст стрелки перед кнопкой'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='text_btn',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Текст кнопки'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='title1',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Заголовок секции деятельность'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='title2',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Заголовок команды'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='title3',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Текст под картинками команды'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='title_image1',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Текст под картинкой 1'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='title_image2',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Текст под картинкой 2'),
        ),
        migrations.AddField(
            model_name='studiapage',
            name='title_image3',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Текст под картинкой 3'),
        ),
        migrations.AlterField(
            model_name='studiapage',
            name='subtitle',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Подзаголовок зеленый текст'),
        ),
    ]
