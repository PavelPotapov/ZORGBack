# Generated by Django 5.0.1 on 2024-02-15 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='formsubmission',
            name='theme',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
