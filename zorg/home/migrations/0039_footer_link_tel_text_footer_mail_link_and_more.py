# Generated by Django 5.0.1 on 2024-01-20 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0038_remove_footer_bodytext_footer_accept_text_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='footer',
            name='link_tel_text',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Cсылка на телефон, формат: tel:+79028607651'),
        ),
        migrations.AddField(
            model_name='footer',
            name='mail_link',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Cсылка на  email, форма: mailto:m.zhvikovm@gmail.com'),
        ),
        migrations.AddField(
            model_name='footer',
            name='mail_text',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Текст email'),
        ),
        migrations.AddField(
            model_name='footer',
            name='tel_text',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Текст телефон'),
        ),
    ]
