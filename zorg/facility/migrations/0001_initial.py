# Generated by Django 5.0.1 on 2024-02-19 12:21

import django.db.models.deletion
import wagtail.blocks
import wagtail.fields
import wagtail.images.blocks
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailcore', '0089_log_entry_data_json_null_to_object'),
        ('wagtailimages', '0025_alter_image_file_alter_rendition_file'),
    ]

    operations = [
        migrations.CreateModel(
            name='FacilityPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('subtitle', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Подзаголовок зеленый текст')),
                ('subtitle2', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Подзаголовок белый текст')),
                ('text', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Основной текст первого блока')),
                ('body_advantage', wagtail.fields.StreamField([('advantage_section', wagtail.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(label='Картинка для блока преимуществ', required=False)), ('title', wagtail.blocks.CharBlock(blank=True, label='Заголовок белый текст', null=True)), ('title2', wagtail.blocks.CharBlock(blank=True, label='Заголовок зеленый текст', null=True)), ('subtitle', wagtail.blocks.CharBlock(blank=True, label='Текст', null=True))], blank=True, verbose_name='Блоки c преимуществами  работы'))], blank=True, use_json_field=True, verbose_name='Блок услуг на главной')),
                ('process_text', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Белый текст процесс')),
                ('process_text2', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Зеленый текст процесс')),
                ('step1', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Процесс шаг 1')),
                ('step2', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Процесс шаг 2')),
                ('step3', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Процесс шаг 3')),
                ('step4', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Процесс шаг 4')),
                ('step5', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Процесс шаг 5')),
                ('step6', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Процесс шаг 6')),
                ('step7', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Процесс шаг 7')),
                ('text2', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Текст под процессом')),
                ('image_facility', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.image', verbose_name='Картинка первого блока')),
                ('image_owner', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.image', verbose_name='Картинка первого блока')),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
    ]