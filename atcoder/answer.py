import sys

# Redirect standard input to read from a file
sys.stdin = open('input.txt', 'r')

#########code from here here --------
def main():
    times = list(map(int,input().split(" ")))

    if times[1] < times[2] :
        if times[1] > times[0] > times[2] :
            print("Yes")
        else:
            print("No")
    else:
        if times[2] > times[0] > times[1] :
            print("Yes")
        else:
            print("No")

main()