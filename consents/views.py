from django.views import generic


class CreateConsentForm(generic.TemplateView):
    """
    This view is to serve the base html template for
    Consent form creation.
    """
    template_name = "index.html"
