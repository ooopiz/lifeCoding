"""
零排到後面
"""
a = [2,3,0,4,50,0,4,4,3,2,22,0,2,333,0,1,1,3,45,4]
print(a)

length=len(a) -1
for i in range(len(a)):
    if i == length:
        break

    if a[i] == 0:
        tmp = a[length]
        a[length] = a[i]
        a[i] = tmp
        length = length - 1

print(a)
