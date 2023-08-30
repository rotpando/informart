def roman_numeral(number):
    roman_numerals = {1000: "M",500: "D",100: "C",50: "L",10: "X",5: "V",1: "I"}

    if number in roman_numerals:
        return roman_numerals[number]

    hundreds = number // 100
    remainder = number % 100

    roman_numeral = roman_numeral(hundreds) + roman_numerals[100]

    if remainder >= 50:
        roman_numeral += roman_numerals[50]
        remainder -= 50

    if remainder >= 10:
        if remainder >= 40:
            roman_numeral += roman_numerals[10]
            remainder -= 10

        roman_numeral += roman_numerals[remainder]

    return roman_numeral


print(roman_numeral(1000))  # M
print(roman_numeral(500))  # D
print(roman_numeral(100))  # C
print(roman_numeral(50))  # L
print(roman_numeral(10))  # X
print(roman_numeral(5))  # V
print(roman_numeral(1))  # I
