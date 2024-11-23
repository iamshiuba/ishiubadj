from django.shortcuts import render


def get_title(request):
    if request.path == "/":
        return "Homepage"
    elif request.path == "/streaming":
        return "Streaming"
    elif request.path == "/about":
        return "About"
    elif request.path == "/news":
        return "News"


def index(request):
    title = get_title(request)
    return render(request, "pages/index.html", {"title": title})


def streaming(request):
    title = get_title(request)
    return render(request, "pages/streaming.html", {"title": title})


def news(request):
    title = get_title(request)
    return render(request, "pages/news.html", {"title": title})


def about(request):
    title = get_title(request)
    return render(request, "pages/about.html", {"title": title})
