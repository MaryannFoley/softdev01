
def min(L):
	lc=[1 if x in "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" else 0 for x in L]
	if sum(lc)==0:
		return False
	lc=[1 if x in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" else 0 for x in L]
	if sum(lc)==0:
		return False
	lc=[1 if x in "1234567890" else 0 for x in L]
	if sum(lc)==0:
		return False
	return True

print(min("aasdjad"))
print(min("aBcDeF"))
print(min("1234"))
print(min("a1b2"))
print(min("Abc123"))
print(min("pOkO0Ko"))

def goodpwd(L):
	l2=[x for x in L if x in "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnop"]
	print(l2)
	lc=[1 if x in "ABCDEFGHIJKLMNOPQRSTUVWXYZ" else 0 for x in l2]
	r=int((.5-abs(sum(lc)/len(lc)-.5))*10)

	l3=[x for x in L if x in "1234567890.?!&#,;:-_*"]
	print(l3)
	r2=int(len(l3)/len(lc)*5)
	print(r2)
	return r+r2


print(goodpwd("ABCDE"))
print(goodpwd("abCD12"))
print(goodpwd("asdjasjdkajsj1293091"))
print(goodpwd("jksdfjlhdshlaDJKLalkkljSAJDASJDLLadjka91203319231230"))
