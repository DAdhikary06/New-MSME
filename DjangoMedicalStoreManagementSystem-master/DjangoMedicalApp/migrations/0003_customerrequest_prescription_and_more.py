# Generated by Django 5.1 on 2024-10-15 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DjangoMedicalApp', '0002_auto_20200715_1826'),
    ]

    operations = [
        migrations.AddField(
            model_name='customerrequest',
            name='prescription',
            field=models.FileField(default='', upload_to=''),
        ),
        migrations.AlterField(
            model_name='companyaccount',
            name='payment_mode',
            field=models.CharField(choices=[(1, 'Cash'), (2, 'Cheque'), (3, 'Online')], max_length=255),
        ),
    ]
