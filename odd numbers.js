let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function evenNum (array){
     let newArray = [];
   for (let i=0; i<array.length; i++){
         if(array[i] % 2 == 1){
             newArray.push(array[i])
         }
   }
     return newArray
}
 let result = evenNum(numArray);
console.log(result)