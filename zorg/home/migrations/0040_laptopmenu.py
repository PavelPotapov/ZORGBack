# Generated by Django 5.0.1 on 2024-02-02 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0039_footer_link_tel_text_footer_mail_link_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='LaptopMenu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title_main', models.CharField(blank=True, max_length=100, null=True, verbose_name='Заголовок главной ссылки')),
            ],
            options={
                'verbose_name': 'Боковое меню',
                'verbose_name_plural': 'Боковые меню',
            },
        ),
    ]
