/* Filter */
const lists = [{
    id: 1,
    name: "George",
    age: 24
    },  
    {
    id: 2,
    name: "Shalom",
    age: 22
    }
    ,{
    id: 3,
    name: "daniel",
    age: 26
},]
const newlist = lists.filter( list => list.id == 2) /*selects the list with the id 1 and saves it to the const newlist*/
console.log(newlist); /*Prints the new array saved in newlist*/



/* Maping */
const numbers = [2,3,6,1,7,9]
const newnums = numbers.map(number => number*2) /*creates a new arrray called newnums and saves the result in the new array. mapping here carries out the algorithm of multiplying the individual elements by 2/
console.log(newnums); /* prints the new array (newnums)*/