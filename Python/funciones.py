""" def imprimir_mensaje():
    print('Mensaje especial: ')
    print('Aprendiendo a usar funciones')


imprimir_mensaje() """

#Funciones y parametros
def chat(mensaje):
    print('Hola')
    print(mensaje)
    print('Adiós')

option = int(input('Elige una opcion (1, 2, 3): '))
if option == 1:
    chat('Elegiste la opción 1')
elif option == 2:
    chat('Elegiste la opción 2')
elif option == 3:
    chat('Elegiste la opción 3')
else:
    print('Elegiste las opcion correcta')
