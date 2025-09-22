from rest_framework import serializers
from .models import ContactMessage, Portfolio

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = "__all__"


class PortfolioSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Portfolio
        fields = ["id", "title", "description", "image_url"]

    def get_image_url(self, obj):
        request = self.context.get("request")
        return request.build_absolute_uri(obj.image.url) if obj.image else None

from rest_framework import serializers
from .models import Contact

from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"

    # Name validation
    def validate_name(self, value):
        if not value.replace(" ", "").isalpha():
            raise serializers.ValidationError("Name must contain only letters.")
        return value

    # Email validation
    def validate_email(self, value):
        import re
        if not re.match(r"^[\w.-]+@[\w.-]+\.\w+$", value):
            raise serializers.ValidationError("Enter a valid email address.")
        return value

    # Phone validation
    def validate_phone(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("Phone must contain only numbers.")
        return value

    # Comment validation
    def validate_comment(self, value):
        if len(value.strip()) < 5:
            raise serializers.ValidationError("Message too short.")
        return value

    # Service validation
    def validate_service(self, value):
        valid_services = [choice[0] for choice in Contact.SERVICE_CHOICES]
        if value not in valid_services:
            raise serializers.ValidationError(f"Service must be one of: {', '.join(valid_services)}")
        return value

