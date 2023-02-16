let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //creates array
console.log(ages);
var subtract = ages.pop() - ages.shift(); // subtracts first from last
console.log(subtract);
ages.push(109);
var subtract = ages.pop() - ages.shift(); // same as above but with added element
console.log(subtract);
let sum = 0;
for(let age of ages){
    sum += age;
}
console.log(sum/ages.length); //after looping through array sum divided by length(total num of elements) gives avg

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);
let total = 0;
for(let name of names){
    let num = name.length;
    total += num;
}
console.log(total/names.length); //created array then found length of each element divided by total num elements

let result = ''; //empty string

for (let i = 0; i < names.length; i++) {
    result = result.concat(names[i]);
    if (i < names.length - 1) {
        result = result.concat(" ");
    }
}
console.log(result); //added each new string to empty string

//Q3 array[array.length - 1];
//Q4 array[0];

let nameLength = [];
for(let name of names){
    nameLength.push(name.length);
}
console.log(nameLength); //looped through and added length of each element to empty array

let nameSum = 0;
for(let name of nameLength){
    nameSum += name;
}
console.log(nameSum); // added all lengths in above array

function sayWordNumber(word,n){
    let words = "";
    for(let i = 0; i < n; i++){
        words = words.concat(word);
    }
    return words;
}
console.log(sayWordNumber("puppy",4)); // created function w/2 parameters and loop for printing

function returnFullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(returnFullName('Sam','Knight')); // just concatenating 2 strings

function isArrayBig(array){
    let sum = 0;
    for(let number of array){
        sum += number;
    }
    if(sum > 100){
        return true;
    } else{
        return false;
    }
} // function compares the sum of elements in array to the value 100

let newArray = [6,7,8,99,77,66,44];
let otherArray = [6,4,3,5];
console.log(isArrayBig(newArray));
console.log(isArrayBig(otherArray)); // testing function

function arrayAverage(array){
    let sum = 0;
    for(let number of array){
        sum += number;
    }
    return sum/array.length;
}
console.log(arrayAverage(otherArray)); // function adds value of elements and divides by num of elements in array

function isArray1Bigger(array1,array2){
    let sum1 = 0;
    let sum2 = 0;
    for(let number of array1){
        sum1 += number;
    }
    for(let number of array2){
        sum2 += number;
    }
    if(sum1 > sum2){
        console.log(true);
    }else{
        console.log(false);
    }
} // compares total in both arrays
isArray1Bigger(newArray,otherArray);
isArray1Bigger(otherArray,newArray);

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.50){
        console.log(true);
    }else{
        console.log(false);
    }
}
willBuyDrink(false,45);
willBuyDrink(true,45);
willBuyDrink(true,2); //tests above code logic

class GameCharacter {    
    constructor(name,superhero,superPower){
        this.name = name;
        this.superhero = superhero;
        this.superPower = superPower;
    }
    describe(){
        console.log(this.name + " has become the superhero " + this.superhero 
        + " and can beat opponents with the super power " + this.superPower);
    }
} // creating object for code below
//the function below was made to practice user input and JS
function becomeSuperhero(){
    let ans = prompt('Would you like to become a superhero? Yes or No');
    if(ans === 'Yes' || ans === 'yes'){
    let name = prompt('Please enter your first name:');
    var superhero = prompt('Who is your favorite superhero?');
    var superPower = prompt('What is your super power?');
    let newSuperhero = new GameCharacter(name,superhero,superPower);
    alert(name + " has become the superhero " + superhero 
    + " and can beat opponents with the super power " + superPower);
    }else{
        alert('Oh well, maybe next life.');
    }
}
becomeSuperhero();