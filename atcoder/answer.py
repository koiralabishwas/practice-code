import sys

# Redirect standard input to read from a file
sys.stdin = open('input.txt', 'r')

#########code from here here --------
def main():
    print(input().replace(".",""))

main()