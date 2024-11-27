kijyun = 2000
saisho =  10 ** 10 ; jun = 0
print(saisho)
while True :
    jun += 1
    nedan = int(input("input : "))
    if nedan == 0 : break
    sa = nedan - kijyun
    if sa < 0 : sa = - sa
    if sa < saisho :
        saisho = sa
        banme = jun ; kingaku = nedan
print("基本金額",kijyun ,"円に最も近いのは")
print(banme , "番目の入力" , kingaku , "円です")