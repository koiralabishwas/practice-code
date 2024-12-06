# def hantei(t) :
#     if t >= 70 :
#         print("合格")
#     else :
#         print("不合格")

# ten = int(input("tensu")
# )
# hantei(ten)

def keisan(x , y ,z) :
    ans = (x * 100) + (y * 10) + z
    return ans



x = int(input("tensu"))
y = int(input("tensu"))
z = int(input("tensu"))

m = keisan(x , y ,z)

print(m)
