def conversor(tipo_pesos, valor_dolar):
    #De pesos colombianos a dólares
    pesos = input("ingresa la cantidad de pesos " + tipo_pesos + ": ")
    pesos = float(pesos)
    #valor_dolar = 3933.68   Ya no es necesario porque llega como parametro
    dolares = pesos / valor_dolar
    #Indicar la cantidad de caracteres que imprima
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print("Tienes $" + dolares + " dólares")


menu = """
Bienvenido al conversor de monedas 💰💰

1 - Pesos colombianos
2 - Pesos argentinos
3 - Pesos mexincanos

Elige una opción: """

opcion = int(input(menu))

if opcion == 1:
    conversor("colombianos", 3933)
elif opcion == 2:
    conversor("argentinos", 105.16) 
elif opcion == 3:
    conversor("mexicanos", 20.57)
else:
    print("Ingresa una opción correcta")

""" #De dólares a pesos colombianos
dolares = input("Ingresa la cantidad de dólares que tienes: ")
dolares = float(dolares)
valor_peso = 3933.68
pesos = dolares * valor_peso
pesos = round(pesos, 2)
pesos = str(pesos)
print("Tienes $" + pesos + " pesos") """