from django.contrib import admin

# Register your models here.
from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register
from .models import FormSubmission


class FormSubmissionAdmin(ModelAdmin):
    model = FormSubmission
    menu_label = 'Form Submissions'
    menu_icon = 'doc-full'
    list_display = ('name', 'email', 'submitted_at')
    search_fields = ('name', 'email', 'telegram_contact', 'linked_in_contact')
    list_filter = ('submitted_at',)


modeladmin_register(FormSubmissionAdmin)
