""" numero = int(input('Escribe un numero: '))
resultado = str(2 ** numero)
if numero <= 10:
    print('2 elevado a la ' + str(numero) + ' es igual a: ' + resultado)
else:
    print('Digite un número menor a 10') """


def run():
    # Definir una constante
    LIMITE = 1000000

    contador = 0
    potencia_2 = 2**contador
    while potencia_2 < LIMITE:
        print('2 elevado a ' + str(contador) +
              ' es igual a: ' + str(potencia_2))
        contador += 1
        potencia_2 = 2 ** contador


# Punto de entrada de python, correo lo que esté dentro
if __name__ == '__main__':
    run()
