import sys

# Redirect standard input to read from a file
sys.stdin = open('input.txt', 'r')

#########code from here here --------
def main():
    N = int(input())
    department = list(map(int, input().split()))
    department.sort()

    half = round(sum(department) / 2)

    group = 0
    for i in range(N) :
        if group < half :
            group = group + department[i]
            print(group)
main()