# Generated by Django 5.0.1 on 2024-01-18 13:39

import wagtail.blocks
import wagtail.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0015_alter_homepage_body2'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='body2',
            field=wagtail.fields.StreamField([('gallery_card', wagtail.blocks.StructBlock([], blank=True, null=True, use_json_field=True, verbose_name='Блоки картинок / видео на главной странице свайпера'))], blank=True, use_json_field=True),
        ),
    ]
