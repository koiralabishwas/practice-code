import sys

# Redirect standard input to read from a file
sys.stdin = open('input.txt', 'r')

#########code from here here --------

c500 = int(input())
c100 = int(input())
c50 = int(input())
total = int(input())

methods = 0

temp = 0
for i in range(0 , c500) :
    for j in range(0 , c100) :
        for k in range( 0 , c50) :
            print(c50)
        print(c100)
    print(c500)