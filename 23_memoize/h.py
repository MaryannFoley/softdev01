import random

def make_HTML_heading(f):
    def inner():
        return '<h1>'+f()+'</h1>'
    return inner

@make_HTML_heading
def greet():
    greetings=["hello","AYO","Hola"]
    return random.choice(greetings)

#greet()

def fib(f):
    l={}
    def helper(x):
        if x in l:
            return l[x]
        x =calcf(x)
        l[x]=x
        return x

def calcf(x):
    if x <=0:
        return 0
    if x ==1:
        return 1
    return calcf(x-1) +calcf(x-2)
