def convert(number):
    res = "Pling" if number % 3 == 0 else ""
    res += "Plang" if number % 5 == 0 else ""
    res += "Plong" if number % 7 == 0 else ""
    return str(number) if res == "" else res