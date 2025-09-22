from rest_framework import viewsets
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from .models import ContactMessage, Portfolio
from .serializers import ContactMessageSerializer, PortfolioSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        instance = serializer.save()

        # ----- Mail to Admin -----
        admin_subject = f"📩 New Contact: {instance.name}"
        admin_body = f"""
        Name: {instance.name}
        Email: {instance.email}
        Phone: {instance.phone}
        Service: {instance.service}
        Comment: {instance.comment}
        """
        EmailMultiAlternatives(
            subject=admin_subject,
            body=admin_body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.ADMIN_EMAIL],
        ).send()

        # ----- Mail to User -----
        portfolio_items = Portfolio.objects.all().order_by("-id")[:3]
        portfolio_html = "".join(
            [f"<img src='{p.image.url}' width='200' style='margin:10px;' alt='{p.title}'/>" for p in portfolio_items]
        )

        user_subject = "✅ Thank you for contacting us!"
        user_html = f"""
        <h2>Hi {instance.name},</h2>
        <p>You successfully contacted us for <b>{instance.service}</b>.</p>
        <p>We will get back to you shortly.</p>

        <h3>Our Other Services:</h3>
        <ul>
            <li>🚀 Static Website Design</li>
            <li>🛒 E-commerce Website Design</li>
            <li>⚡ Dynamic Website Development</li>
            <li>💡 Custom Solutions</li>
        </ul>

        <h3>Our Portfolio:</h3>
        {portfolio_html}

        <p>Best regards,<br/>Your Team</p>
        """

        msg = EmailMultiAlternatives(
            subject=user_subject,
            body="Thank you for contacting us!",
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[instance.email],
        )
        msg.attach_alternative(user_html, "text/html")
        msg.send()


class PortfolioViewSet(viewsets.ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

from rest_framework import viewsets, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import Contact
from .serializers import ContactSerializer

from rest_framework import viewsets, status
from rest_framework.response import Response
from django.core.mail import EmailMultiAlternatives, send_mail
from django.conf import settings
from django.template.loader import render_to_string
from .models import Contact, Portfolio
from .serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            
            # --- Mail to Admin (plain text) ---
            send_mail(
                subject=f"📩 New Contact Form from {contact.name}",
                message=f"""
Name: {contact.name}
Email: {contact.email}
Phone: {contact.phone}
Service: {contact.service}
Comment: {contact.comment}
""",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],
                fail_silently=False
            )

            # --- Mail to User (HTML animated with portfolio) ---
            portfolio_items = Portfolio.objects.all().order_by("-id")[:3]

            html_content = render_to_string("emails/contact_user.html", {
                "data": request.data,
                "portfolio_items": portfolio_items
            })
            text_content = f"Hi {request.data['name']}, thanks for contacting us for {request.data['service']}."

            msg = EmailMultiAlternatives(
                subject="✅ Thank you for contacting us!",
                body=text_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[request.data['email']]
            )
            msg.attach_alternative(html_content, "text/html")
            msg.send(fail_silently=False)

            return Response({"success": True, "message": "Form submitted successfully"}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)










