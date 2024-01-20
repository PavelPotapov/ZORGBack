# Generated by Django 5.0.1 on 2024-01-18 11:49

import wagtail.blocks
import wagtail.embeds.blocks
import wagtail.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0012_alter_homepage_body'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='body',
            field=wagtail.fields.StreamField([('work_card', wagtail.blocks.StructBlock([('title', wagtail.blocks.CharBlock(blank=True, label='Заголовок должности в модальном окне', null=True)), ('date', wagtail.blocks.CharBlock(blank=True, label='Дата', null=True)), ('short_title', wagtail.blocks.CharBlock(blank=True, label='Название должности в карточке', null=True)), ('type_work', wagtail.blocks.CharBlock(blank=True, label='Тип работы (Удаленно / и другие)', null=True)), ('message', wagtail.blocks.CharBlock(blank=True, label='Описание работы ', max_length=1000, null=True)), ('requirements', wagtail.blocks.ListBlock(wagtail.blocks.CharBlock(), label='Список требований'))], blank=True, use_json_field=True, verbose_name='Блоки с карточкой работы на главной странице')), ('gallery_block', wagtail.blocks.StructBlock([('video', wagtail.embeds.blocks.EmbedBlock(blank=True, label='Video', null=True))]))], use_json_field=True),
        ),
    ]