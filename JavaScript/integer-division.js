function number(amount,price){
    alert(amount/price >> 0)
}

number(33,2)
// trick for getting the integer division
// a/b >>0 this will give you output in format of
// integer and remove float value if it has any
