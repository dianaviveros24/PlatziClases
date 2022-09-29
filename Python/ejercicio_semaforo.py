""" Ejercicio de interrupciones con break y continue - Semáforo """
def run():
    time = 0
    for time in range(61):
        print(str(time) + ' 🟢 🚕' + ' 🔴 🚲')
        time += 1
        if time == 61:
            break

    for time in range(4):
        print(str(time) + ' 🟡 🚕' + ' 🔴 🚲')
        time += 1
        if time == 4:
            break

    for time in range(31):
        print(str(time) + ' 🔴 🚕' + ' 🟢  🚲')
        time += 1
        if time == 31:
            break


if __name__ == '__main__':
    run()

