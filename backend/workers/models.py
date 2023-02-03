from django.db import models


class Worker(models.Model):
    email = models.EmailField()
    nickname = models.CharField("nickname", max_length=255)
    first_name = models.CharField("First name", max_length=255)
    last_name = models.CharField("Last name", max_length=255)
    direction = models.CharField("Direction", max_length=255)
    level = models.CharField("Level", max_length=255)
    price = models.IntegerField("Price")
    status = models.CharField("Status", max_length=255)
    skills = models.CharField("Skills", max_length=255)
    age = models.IntegerField()
    location = models.CharField("City or Remote", max_length=255)


    def __str__(self):
        return self.first_name

