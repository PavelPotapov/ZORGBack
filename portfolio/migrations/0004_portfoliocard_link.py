# Generated by Django 5.0.6 on 2024-05-21 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_portfoliocard_order_for_main'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfoliocard',
            name='link',
            field=models.CharField(blank=True, max_length=350, null=True),
        ),
    ]