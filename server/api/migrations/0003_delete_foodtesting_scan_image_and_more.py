# Generated by Django 5.0.7 on 2024-10-04 18:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_user_domain_user_trainer'),
    ]

    operations = [
        migrations.DeleteModel(
            name='FoodTesting_Scan_Image',
        ),
        migrations.DeleteModel(
            name='FoodTesting_Scan_text',
        ),
    ]
