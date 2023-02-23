from django.urls import path
from . import views
urlpatterns = [
    path("",views.Landing,name='Landing'),
    path("/home",views.Home,name='Home'),
    path("/about",views.About,name='About'),
    path("/login",views.Login,name='Login'),
    path("/register",views.Register,name='Register'),
]