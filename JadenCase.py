def to_jaden_case(string):
    individ_words = string.split(' ')
    final = ""
    for word in individ_words:
       final += word.capitalize() + " "
    final = final[:-1]
    return final