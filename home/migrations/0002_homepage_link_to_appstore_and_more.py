# Generated by Django 5.0.1 on 2024-02-15 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='link_to_appstore',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Ссылка на appstore'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='link_to_googleplay',
            field=models.CharField(blank=True, max_length=1000, null=True, verbose_name='Ссылка на google play'),
        ),
    ]