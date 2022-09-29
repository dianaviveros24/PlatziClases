def palindromo(palabra):
    palabra = palabra.replace(' ','') #eliminamos los espacios de la frase
    palabra = palabra.lower()
    palabra_invertida = palabra[::-1]
    if palabra == palabra_invertida:
        return True
    else:
        return False


def run():
    palabra = input('Escribe una frase/palabra: ')
    es_palindromo = palindromo(palabra)
    if es_palindromo == True:
        print('Es palindromo')
    else:
        print('No es palindromo')


#Punto de entrada de python, correo lo que esté dentro
if __name__ == '__main__': 
    run()