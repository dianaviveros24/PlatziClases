nombre = "Francisco"
print(nombre)
nombre_mayusculas = nombre.upper()
nombre_primer_mayuscula = nombre.capitalize()
nombre_elim_espacios = nombre.strip()
nombre_minusculas = nombre.lower()
nombre_reemplazar_caracter =len(nombre)

nombre0 = nombre[0]
print(nombre0)

#Slices (Rebanadas)
nombre_slice = nombre[0:2] #Se pone comienzo y fin de la rebanada
nombre_slice1 = nombre[2:]
print(nombre_slice1)
nombre_slice2 = nombre[1:7:2] #Va del indice 1 hasta el 7 contando de 2 en dos
print(nombre_slice2)
nombre_alreves = nombre[::-1]
