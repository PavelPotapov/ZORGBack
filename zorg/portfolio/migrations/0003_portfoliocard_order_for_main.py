# Generated by Django 5.0.1 on 2024-02-12 11:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_portfoliocard_categories_portfoliocard_style'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfoliocard',
            name='order_for_main',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]