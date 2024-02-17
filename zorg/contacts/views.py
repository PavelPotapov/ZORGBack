from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from .models import FormSubmission


def form_submission(request):
    print('работает!!')
    if request.method == 'POST':
        email = request.POST.get('email')
        name = request.POST.get('name')
        theme = request.POST.get('theme')
        message = request.POST.get('message')
        print(request.FILES.get("input-file"))
        FormSubmission.objects.create(
            email=email, name=name, theme=theme, message=message)
        # return HttpResponseRedirect('/thank-you/')
        return HttpResponse("", status=200)
    return HttpResponse("", status=500)


# name: pavel potapov
# email: pavelpotapov@gmail.com
# telegram-contact: test
# linkedin-contact: wrhgwr
# about-me: wrghwerghweh
# input-file: (binary)
def vacancy_submission(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        name = request.POST.get('name')
        theme = request.POST.get('theme')
        telegram_contact = request.POST.get('telegram-contact')
        linkedin_contact = request.POST.get('linkedin-contact')
        about_me = request.POST.get('about-me')
        input_file = request.FILES['input-file']
        FormSubmission.objects.create(
            email=email, name=name, theme=theme, message=about_me, telegram_contact=telegram_contact, linked_in_contact=linkedin_contact, resume=input_file)
        return HttpResponse("", status=200)
    return HttpResponse("", status=500)
