# 1. vowel counter 
# first understanding revise all about functions that i learned before 
#here the question about vowels that mean string 
"""1. check built in functions (for this qsn there in no built in function so we use user define)
2. standard libraries 
3. exterrnal libraries 
4. if these three are not usefull then create user define function"""

def vowel_count(text):

    vowels = "aeiou"
    count = 0

    for char in text:
        if char in vowels:
            count += 1

    return count

text = input("enter any text: ")
print(vowel_count(text))


#2. palindrome checker 
"""1. first you should know like what is the mean of palindrome 
(A palindrome is a word, number, or sentence that reads the same forward and backward.)
2. create logic in your own words 
3.user se input liya sahil or isko ek variable me rkh diya 
or dusre variable me ulta kr diya tofir check kr liya dono same h to palindrome h wrna nhi"""""

text = input("Enter a word: ")

reverse_text = text[::-1]  #slicing last se first ki taraf 

if text == reverse_text:
    print("Palindrome")
else:
    print("Not Palindrome")


#3. reverse string
text=input("enter text ")
reverse_text=text[::-1]
print(reverse_text)


#4. even odd
def even_odd_checker(num):   #parameter 
    if num %2==0:
        print("even")
    else:
        print("odd")


num=int(input("enter num"))     
even_odd_checker(num)     #function call with argument 
    
