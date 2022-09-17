let x = 3
let y = 2
console.log(x==y);
console.log(x===y);

console.log(3>2);
console.log(2>3);
console.log(3>=2);
console.log(3>=3); 

let isNigrian = true;
console.log(!isNigrian);
 
//logical OR
console.log(3>2 || 1>2);

//logical AND
console.log(3>2 && 1>2);


//logical NOT
console.log(3!=2);
console.log(3!=="2");
console.log(3!=="3");

function greater (a,b) {
    return a > b;
}
let result = greater(1,2)
console.log(result)

console.log( 2!= "2");
console.log(null===String) 

function division(num1,num2){
    if(num2 === 0){
        return "Enter a non-zero denominator";
    }
    return num1/num2
}
console.log(division(1,0));

function division(num1,num2){
    if(num2 !== 0){
        return num1/num2;
    }
    return "enter a non-zero denominator" 
}
console.log(division(1,0));

