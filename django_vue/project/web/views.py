from django.shortcuts import render

# Create your views here.


def index(request):
    template = 'index.html'
    return render(request, template, {})


def vue(request, component):
    vue_params = {}
    for key, value in request.GET.items():
        vue_params[key] = value
    template = 'vue.html'
    return render(request, template, {'component': component, 'vue_params': vue_params})
