import sys

# Redirect standard input to read from a file
sys.stdin = open('input.txt', 'r')

#########code from here here --------
def main():
    input()
    aData = list(map(int, input().split()))
    bData = list(map(int, input().split()))

    print(max(aData) + max(bData))
main()