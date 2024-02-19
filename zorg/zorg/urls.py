from django.conf import settings
from django.urls import include, path
from django.contrib import admin
from django.http import Http404

from wagtail.admin import urls as wagtailadmin_urls
from wagtail import urls as wagtail_urls
from wagtail.documents import urls as wagtaildocs_urls

from home import views as home_views
from search import views as search_views
from ourstudia import views as studia_views
from portfolio import views as portfolio_views
from work import views as work_views
from contacts import views as contact_views
from facility import views as facility_views


urlpatterns = [
    path("django-admin/", admin.site.urls),
    path("admin/", include(wagtailadmin_urls)),
    path("work/", work_views.hello_work),
    path("facility/", facility_views.hello_facility),
    path("studia/", studia_views.hello_studia),
    path("portfolio/", portfolio_views.hello_portfolio),
    path("portfolio/", portfolio_views.hello_portfolio),
    path("contact", contact_views.form_submission),
    path("vacancy", contact_views.vacancy_submission),
    path("filter", portfolio_views.filter_portfolio),
    path("", home_views.hello_world, name="test")
]


if settings.DEBUG:
    from django.conf.urls.static import static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    # Serve static and media files from development server
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

urlpatterns = urlpatterns + [
    # For anything not caught by a more specific rule above, hand over to
    # Wagtail's page serving mechanism. This should be the last pattern in
    # the list:
    path("", include(wagtail_urls)),
    # Alternatively, if you want Wagtail pages to be served from a subpath
    # of your site, rather than the site root:
    #    path("pages/", include(wagtail_urls)),
]
