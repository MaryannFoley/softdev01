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
        
