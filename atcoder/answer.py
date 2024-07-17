import sys

# Redirect standard input to read from a file
sys.stdin = open('input.txt', 'r')

#########code from here here --------
def main():
    N = int(input()) # number of cards 
    cards = list(map(int , input().split())) # card values
    cards.sort(reverse=True)

    alice = 0
    bob = 0


    i = 0
    while i < len(cards) :
        alice += cards[i]
        if i + 1 < len(cards) :
            bob += cards[i + 1]
        else :
            break 
        i += 2
    
    # print(cards)
    # print(alice)
    # print(bob)
    print(alice - bob)


main()