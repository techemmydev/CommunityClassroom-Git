//console.log("hello world");

//variable (var, let, const) 
let name = "emmauel";
console.log(name);

sentence = "how re you doing today , nice to see you , hope you have a great day!";

//operators
//let fruits = prompt("what is your favourites fruits");
//console.log(fruits);
/*
let food = Number(prompt("how much was the food?"));
let tipPercentage = Number (prompt("tip %?")) / 100;
var tipAmount = food * tipPercentage;
total = food + tipAmount;
console.log("total" ,total);
console.log("tipAmount" ,tipAmount);*/
//alert(tipAmount)

//user input

/* data types (stings, numbers)
numbers=1,4,3,4,4,5,5
strings ="hello", "what is your name"
array=[]
object={}
boolean=true/false;(banks)
*/

//function
// this is a function called 'sayMyname'
//and it has 0 aqurement
function sayMyName(){
    console.log("emmanuel")
}
sayMyName()
// this is a function called 'sayMyname2'
//and it has an aqurement of name and the call function is kelvin 
function sayMyName2(name){
    console.log(name)
}
sayMyName2("kevlin")
// this is a function called 'sayMyname2'
//and it has an aqurement of name and the call function is emmydev
function greeting(name){
greet = `hi ${name} , nice to meet you`;
console.log(greet)
}
greeting("emmydev")

//return statement in javascripts///////////////////////////////////////////
function sum(a,b){
    //return
    return a+b;
}
num1=sum(1,2)
console.log(num1);
//type casting
/* maths operators
multiply*
divide /
exponents**
modulo/reminder %
addition +
substract-
*/
/*
maths methods
Math.floor(Math.random()*3)
math.floor- rounds down
math.random- it gives you a random number
math.ceil- rounds up
*/
//baby weather app project 1(conditionals)
// if rain - grab your umbrella
//else wear your sunglassses
//conditinal operators
//==,===,>,<,<=,>=,!=,!==

// //let weather = prompt("how is the weather");
// if(weather=="rainy"){
// console.log("grab your umbrella")

// }else{
//     console.log("wear your sunglasses");
// }
// in this function we called the sum function we created before check up for the code
function calculateFoodTotal(food, tip){

let tipPercentage = tip / 100;
let tipAmount = food * tipPercentage;
let total = sum(food + tipAmount);

return total

}
console.log(calculateFoodTotal(300,20));

//constant variable
function calculateFoodTotal(food, tip){

const tipPercentage = tip / 100;
const tipAmount = food * tipPercentage;
const total = greeting(food + tipAmount);

return total

}
console.log(calculateFoodTotal(300,20));
//ES6
// Arrow Functions =>
//arrow function with explicit return
const sumArrow = (a,b) => {
return a+b
}
//arrow function with implicit return
//IMPORTANT: for implicit return, remove squegglies called the curly braces
const sum = (a,b) => a+b;
console.log(sumArrow2(20,30));



//pratical test to do in 10 minutes
function add(a,b){
    return a+b;
}
function div(a,b){
    return a/b;
}
function mul(a,b){
    return a*b;
}
function sub(a,b){
    return a-b;
}

function addNumber(){
const result1=add(20,10);
const result2=Math.floor(div(20,30));
const result3=sub(20,100);
const result4=mul(100,40);  

alert(`my result is ${result1} for addition,while for division the result is ${result2} for substraction the  result is ${result3} for muiltiplication the result is ${result4} for addition`)
let number=prompt("enter the number greater than");
    
if (number>100){
    alert("you re good to go")
}
else if(number<= 0){
    console.log("keep trying unitl you reach")
}
else{
    console.log("your trial has passed");
}
    console.log(number);
}
addNumber()

//arrays
const groceries = ["apple","mango","pawpaw","carrot","melon","pineapple"]
console.log(groceries);
//remember that array start countging from 0 ,1,2,3,4, like that so if you want to select any element from the  array you will do 
console.log(groceries[2]);
// this will display the index pawpaw 
groceries.push("bananas","beans","rice","yams");
console.log(groceries);
// push method is used to add an element in an array
groceries.slice();
console.log(groceries.slice(0,3));
console.log(groceries.slice(2,5));
//this method called slice it allow you to select any of the element from the array as a new aray
// we also have array method like (slice,push,indexOf,length)
console.log(groceries.indexOf("yams"));
// this allow you to know the index of the yam in the element of the array
console.log(groceries.length);
//this allow you to know the total number in an array element

//object in javascripts details of a persons
const person={
name:"emmydev",
shirt:"black shirt"
}
// how to access an object we do that by .dot notation or bracket notation

console.log(person.name);
console.log(person.shirt);
//example of bracket notation
console.log(person["name"]);
// assign object
person.phone="080655923678";
console.log(person.phone);
person.email="gabrielemmanuelmary12345@gmail.com";
console.log(person.email);
// you can also console log the entire person as well 
console.log(person);
// let turn this to function
const introducer = (name, shirt,email,phone) =>{
const intro=`hi my name is ${person.name} and the color of my shirt is ${person.shirt} my number and my email is ${person.phone} , ${person.email}`

return intro
}
console.log(introducer("emmydev","gabrielemmanuelmary12345","black shirt","gabrielemmanuelmary12345","080665592378"));
// simple projects
const peesonDetails={
    myName:"emmanuel",
myAge: 23,
department:"computer science",
school:"yaba college of technology",
}
//creating a function with it
const myInform=(myName,myAge,department,school)=>{
    const showMyDetails=`my name is ${peesonDetails.myName} am ${peesonDetails.myAge} am studying ${peesonDetails. department} at ${peesonDetails.school} i will br rounding up next year`
    return showMyDetails

}
console.log(myInform("emmauel","computer science","yaba college of technology","23"));
// another way
const details=(name,shirt,age,email,)=>{
const personDeatails={
name:name,
shirt:shirt,
age:age,
email:email,
assests:10000,
liabilities: 5000,
networth:function(){
    return this.assests-this.liabilities
}
}
const inrto=`hi, my name is ${personDeatails.name} and the color of my shirt is ${personDeatails.shirt} and my email address and my age is ${personDeatails.age} ${personDeatails.email} my networth is ${personDeatails.networth()} usd`


return inrto
}
console.log(details("emmydev","white","23","gabrielemmanuelmary12345"));

//loops in javacsripts//loops in javacsripts//loops in javacsripts//loops in javacsripts//loops in javacsripts



//loops in javacsripts


let myFruits = ["apple","mango","pawpaw","carrot","melon","pineapple","apple","mango","pawpaw","carrot","melon","pineapple","apple","mango","pawpaw","carrot","melon","pineapple","apple","mango","pawpaw","carrot","melon","pineapple","apple","mango","pawpaw","carrot","melon","pineapple"]
for (let i = 0; i < myFruits.length; i++) {
    console.log(i,myFruits[i])
}// the i onm the cnsole.log can also count it for you by counting it numerically 
// this print out all the furit at onces 


const numberss=[1,2,3,4,5,6]
for (let i=0; i< numbers.length;i++) {
    console.log(i,numbers[i])
}

const numbers=[1,2,3,4,5,6]
for (num of numbers) {
    console.log(num)//to multiply it time 20 or whatever number you can do console.log(num*2 or any number)
}
// to create a new array
let result=[]
for (num of numbers) {
 
    result.push(number*2);
}console.log(num*2)

// another way of doing it to push an empty array
const double=(numbered)=>{

    let result=[]
    //looping it to the new array which is result[]
    for(const nums of numbered){
    result.push(nums*2)// to square the number you add another ** in the push
    }
    return result
}
console.log(double([1,2,3,4,5,6,7,89,]))

//this allow you to know how many letter in a giving phrase
const howManyLetters=()=>{
const phrase='hey how many letters re here'
for(let letter in phrase){
    console.log(letter)
}
}
console.log(howManyLetters())// you can remove the console and just call the function
// doing this will will print out the letter in the phrase
const howManyLetterssss=()=>{
const phrase='hey how many letters re here'
for(let letter of phrase){
    console.log(letter)
}
}
howManyLetters()
//adding plus 1 to it and converting it to numbers
const howManyLetterss=()=>{
const phrase='hey how many letters re here'
for(let letter in phrase){
    console.log(Number(letter)+1)
}
}
console.log(howManyLetterss())
//it will return the last values
//"banana.length"
const howManyLetterse=(phrases)=>{
const phrase='hey how many letters re here'
  return{result:phrases.length}
}

const phrases=prompt("enter your phrase")
console.log(howManyLetters(phrases))

//////////////////////////
const sumArray=(numbers)=>{
    let result=0;
    //loop
    for(const number of numbers){
        result=result+number
        console.log(number)

    }
    return {result}
}
const nums=[1,2,3,4,5,6,7]
//sum all numbers in array
console.log(sumArray(nums))
//////////////////////////////////////////////////////////////////////////
const max=(numbers)=>{
let results=numbers[0]
//loop
for(const number of numbers){

    if(number>results){
      results=number  
    }
}
return result


}
console.log("results", max([1,2,3,4,5,6,77777777,78776,3,2,2]))
alert("hello world");
let summer =(a,b)=>{
return a+b

}
let result1=(summer(12,23))
console.log(result1)




















