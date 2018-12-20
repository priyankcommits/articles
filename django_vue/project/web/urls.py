from django.conf import settings
from django.conf.urls import url

from .views import index, vue

urlpatterns = [
    url(r'^vue/(?P<component>[^/]+)/$', vue, name='vue'),
    url(r'', index, name='index'),
]

if settings.ENVIRONMENT != 'production':
    urlpatterns += [
        url(r'^vue/(?P<component>[^/]+)/$', vue, name='vue'),
    ]
