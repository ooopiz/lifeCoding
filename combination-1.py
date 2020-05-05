"""
排序不變的各種組合
"""

def qq(arr):
    qqlist = []
    qqlist.append(arr)
    if len(arr) == 1:
        return qqlist

    for index in range(len(arr)):
        left = arr[0:index+1]
        right = arr[index+1:]
#        print("left: " + str(left))
#        print("right: " + str(right))

        if len(right) > 0:
            rec = qq(right)
            for index in range(len(rec)):
                qqlist.append(left+","+rec[index])

    return qqlist


arr = 'ABCD'
#arr = ['A','B','C''D']

haha = qq(arr)
for index in range(len(haha)):
    print(haha[index])
