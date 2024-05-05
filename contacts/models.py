from django.db import models
from wagtail.admin.panels import FieldPanel


class FormSubmission(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=255)
    telegram_contact = models.CharField(max_length=255, blank=True, null=True)
    linked_in_contact = models.CharField(max_length=255, blank=True, null=True)
    resume = models.FileField(upload_to='resumes/', blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    theme = models.CharField(max_length=255,  blank=True, null=True)
    message = models.CharField(max_length=255,  blank=True, null=True)

    panels = [
        FieldPanel('email'),
        FieldPanel('name'),
        FieldPanel('telegram_contact'),
        FieldPanel('linked_in_contact'),
        FieldPanel('resume'),
        FieldPanel('theme'),
        FieldPanel('message'),
    ]

    def __str__(self):
        return self.name
