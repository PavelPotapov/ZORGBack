# Generated by Django 5.0.1 on 2024-02-07 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfoliocard',
            name='categories',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
        migrations.AddField(
            model_name='portfoliocard',
            name='style',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]
