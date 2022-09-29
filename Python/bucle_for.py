""" contador = 1
while contador < 1000:
    contador += 1
    print(contador) """

for contador in range(1001):
    print(contador)


#generando caracteres d4l 1 al 1000
for contador in range(1, 1001):
    print(contador)


#Recorriendo un string con for
def run():
    nombre = input('Escriba el nombre: ')
    for letra in nombre:
        print(letra)