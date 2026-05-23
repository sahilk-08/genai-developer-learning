from main import add

def test_1():
    assert add(2,3) == 5

def test_2():
    assert add(0,0) == 0

def test_3():
    assert add(-1,1) == 0

def test_4():
    assert add(5,5) == 10

def test_5():
    assert add(10,2) == 12