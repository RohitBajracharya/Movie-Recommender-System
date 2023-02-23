from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
# Main landing page of website
def Landing(request):
  return render(request,"landing/landing.html")

def Home(request):
  return render(request,"landing/home.html")

def About(request):
  return render(request,"landing/about.html")

def Login(request):
  return render(request,"landing/login.html")

def Register(request):
  return render(request,"landing/register.html")