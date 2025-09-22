from rest_framework.routers import DefaultRouter
from .views import ContactMessageViewSet, PortfolioViewSet,ContactViewSet

router = DefaultRouter()
router.register(r"contactmessage", ContactMessageViewSet, basename="contactmessage")
router.register(r"portfolio", PortfolioViewSet, basename="portfolio")
router.register(r'contact', ContactViewSet, basename='contact')


urlpatterns = router.urls
