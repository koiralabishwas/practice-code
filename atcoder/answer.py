import sys

# Redirect standard input to read from a file
sys.stdin = open('input.txt', 'r')

#########code from here here --------
def main():
    n, a, b = map(int, input().split())


    sum_total = 0

    for i in range(1, n + 1):
        digit_sum = sum(int(digit) for digit in str(i))
        if a <= digit_sum and digit_sum <= b:
            sum_total += i
    print(sum_total)
                




        
        

main()