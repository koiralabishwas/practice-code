import sys

# Redirect standard input to read from a file
sys.stdin = open('input.txt', 'r')

#########code from here here --------
len = int(input())
datas = input().split(" ")

# num list
numlist = []
for d in datas :
    numlist.append(int(d))


# functions-------------
def allEven(arrray) :
    for i in arrray :
        if i % 2 != 0 :
            return False
    return True

def divBy2(array) :
    return [i // 2 for i in array]

# main
counter = 0
while allEven(numlist) :
    numlist = divBy2(numlist)
    counter += 1 

    if all(v == 0 for v in numlist) :
        break


print(counter)




    

