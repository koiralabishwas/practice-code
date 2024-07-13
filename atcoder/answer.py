import sys

# Redirect standard input to read from a file
sys.stdin = open('input.txt', 'r')

#########code from here here --------
def main() :
    n , a , b = map(int, input().split())
    n = str(n).split()

    print(n , a ,b)
        

main()