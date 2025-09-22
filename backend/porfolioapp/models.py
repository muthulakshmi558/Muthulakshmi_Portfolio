from django.db import models

class ContactMessage(models.Model):
    SERVICES = [
        ("Static Website Design", "Static Website Design"),
        ("E-commerce Website Design", "E-commerce Website Design"),
        ("Dynamic Website Design", "Dynamic Website Design"),
        ("Other Queries", "Other Queries"),
    ]

    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    service = models.CharField(max_length=50, choices=SERVICES)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.service}"


class Portfolio(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="portfolio/")

    def __str__(self):
        return self.title

from django.db import models

class Contact(models.Model):
    SERVICE_CHOICES = [
        ("Static Website Design", "Static Website Design"),
        ("E-commerce Website Design", "E-commerce Website Design"),
        ("Dynamic Website Design", "Dynamic Website Design"),
        ("Other Queries", "Other Queries"),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    service = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.service}"
