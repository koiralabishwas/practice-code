nedan = {
    "草もち" : 80,
    "せんべい" : 120,
    "アメ" : 50,
    "だんご" : 130,
}

kosu = {}

while 1 :
    sina = input("sina")
    k = input("kosu")
    if k == "0" : break
    kosu[sina] = kosu.get(sina,0) + int(k)

print(kosu)
uriage = 0
for sina in kosu.keys() :
    uriage += kosu[sina] * nedan[sina]
print(uriage)
