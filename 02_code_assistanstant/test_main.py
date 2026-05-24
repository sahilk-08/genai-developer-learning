from main import vowel_count
from main import palindrome_checker
from main import reverse_string
from main import even_odd_checker


# vowel counter tests
def test_vowel_count_normal():
    assert vowel_count("hello") == 2


def test_vowel_count_empty():
    assert vowel_count("") == 0

# palindrome tests

def test_palindrome_true():
    assert palindrome_checker("madam") == "Palindrome"

def test_palindrome_false():
    assert palindrome_checker("hello") == "Not Palindrome"


# reverse string tests
def test_reverse_string():
    assert reverse_string("python") == "nohtyp"


# even odd tests
def test_even_number():
    assert even_odd_checker(4) == "even"


def test_odd_number():
    assert even_odd_checker(5) == "odd"