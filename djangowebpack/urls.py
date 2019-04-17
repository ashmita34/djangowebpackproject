from djangowebpack.views import HomeView

urlpatterns = [
#...
    path('/', HomeView.as_view()),
#...
]