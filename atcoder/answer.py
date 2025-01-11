import sys

# Redirect standard input to read from a file
sys.stdin = open('input.txt', 'r')

#########code from here here --------
def main():
    N,D = map(int,input().split())
    print(N,D)

    for i in range(1,D + 1):
        heaviest = 0
        for T,L in snakes :
            weight = T * (L + i)
            if weight >= heaviest :
                heaviest = weight
    
    print(heaviest)
main()