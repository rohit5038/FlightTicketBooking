# Generated by Django 5.0 on 2024-01-30 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flight', '0003_alter_contact_comments_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='Comments',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='contact',
            name='FromEmailAddress',
            field=models.EmailField(max_length=50),
        ),
        migrations.AlterField(
            model_name='contact',
            name='PhoneNumber',
            field=models.CharField(max_length=15),
        ),
    ]