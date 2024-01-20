# Generated by Django 5.0.1 on 2024-01-18 13:30

import wagtail.blocks
import wagtail.embeds.blocks
import wagtail.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0014_homepage_body2_alter_homepage_body'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='body2',
            field=wagtail.fields.StreamField([('gallery_card', wagtail.blocks.StructBlock([('video_url', wagtail.embeds.blocks.EmbedBlock(blank=True, label='Video', null=True))], blank=True, null=True, use_json_field=True, verbose_name='Блоки картинок / видео на главной странице свайпера'))], blank=True, use_json_field=True),
        ),
    ]
