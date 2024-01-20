# Generated by Django 5.0.1 on 2024-01-18 13:53

import wagtail.blocks
import wagtail.embeds.blocks
import wagtail.fields
import wagtail.images.blocks
import wagtailvideos.blocks
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0018_remove_homepage_body3_alter_homepage_body2'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='body2',
            field=wagtail.fields.StreamField([('gallery_card', wagtail.blocks.StructBlock([('video_gallery2', wagtailvideos.blocks.VideoChooserBlock(blank=True, label='Видеофайл для блока свайпера', null=True)), ('image_gallery', wagtail.images.blocks.ImageChooserBlock(blank=True, label='Картинка для блока свайпера', null=True)), ('video_url', wagtail.embeds.blocks.EmbedBlock(blank=True, label='URL видео', null=True))], blank=True, null=True, use_json_field=True, verbose_name='Блоки картинок / видео на главной странице свайпера'))], blank=True, use_json_field=True),
        ),
    ]
