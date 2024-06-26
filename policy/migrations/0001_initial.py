# Generated by Django 5.0.1 on 2024-04-24 17:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailcore', '0089_log_entry_data_json_null_to_object'),
    ]

    operations = [
        migrations.CreateModel(
            name='PolicyPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
                ('title1', models.CharField(blank=True, max_length=1000, null=True, verbose_name='Белый текст заголовка')),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
    ]
