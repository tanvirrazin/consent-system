from django.conf.urls import include, url

from .views import CreateConsentForm

urlpatterns = [
    url(r'^', CreateConsentForm.as_view(), name="create_consent_form")
]