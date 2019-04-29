#Maryann Foley
#SoftDev2 pd8
#K17 -- PPFTLCW
#2019-04-14

import math

def oneL(n):
    l = []
    for i in range(n):
        l.append(2*str(i*2))
    return l

def oneC(n):
    return [2*str(x*2) for x in range(n)]

def twoL(n):
    l=[]
    for i in range(n):
        l.append(7+10*i)
    return l

def twoC(n):
    return [(10*x+7) for x in range(n)]

def threeL(n):
    l=[]
    for i in range(n):
        l.append((i//3)*(i%3))
    return l

def threeC(n):
    return [(i//3)*(i%3) for i in range(n)]

print(oneL(5))
print(oneC(5))
print(twoL(5))
print(twoC(5))
print(threeL(9))
print(threeC(9))

def isPrime(num):
    if num <2:
        return False
    else:
        for i in range(2,int(math.sqrt(num))):
            if num % i ==0:
                return False
        return True

def fourL():
    l=[]
    for i in range(2,101):
        if not isPrime(i):
            l.append(i)
    return l

def fourC(n=101):
    return [x for x in range(2,n) if not isPrime(x)]

def fiveL():
    l=[]
    for i in range(2,101):
        if isPrime(i):
            l.append(i)
    return l

def fiveC(n=101):
    return [x for x in range(2,n) if isPrime(x)]

#print(fourL())
#print(fourC())
#print(fiveL())
#print(fiveC())

def sixL(n):
    l=[]
    for i in range(2,n):
        if n%i==0:
            l.append(i)
    return l

def sixC(n):
    return [x for x in range(2,n) if n%x==0]

print(sixL(50))
print(sixC(50))
