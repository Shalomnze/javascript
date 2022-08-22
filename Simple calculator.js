function add(num1,num2){
    return num1 + num2;
}
function modulus(num1,num2){
    return num1 % num2
}

function divide(num1,num2){
    if(num2===0){
        return "enter a non zero denominator"
    }
}
function subtraction (num1,num2){
    return num1 - num2;
}
function calculator (num1, num2, operation){
    return operation(num1,num2)
}
 let result = calculator (3,3,divide)
 console.log(result)
 