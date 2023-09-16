var myName = "angela u";
var yourName = prompt("what is your name");
alert(myName);

alert("my name is " + myName + ", welcome to my course " + yourName + "!");
var gameLevel = 1;
gameLevel = 2;
gameLevel = 3;
alert("your game level is currently" + gameLevel);

//my first test in variable
function test() {
  var a = "3";
  var b = "8";

  /***********Do not change the code above 👆*******/
  //Write your code on lines 7 - 9:
  var c = a;
  a = b;
  b = c;

  /***********Do not change the code below 👇*******/

  console.log("a is " + a);
  console.log("b is " + b);
}

// passed code was successfully completed
//strings contatenation
"a" + " " + "b";
//string length
var tweet = prompt("compose your tweet");
var tweetCount = tweet.length;
alert(
  "you have written " +
    tweetCount +
    " characters, you have " +
    (140 - tweetCount) +
    "characters remaiming."
);
// or you do it like this
var tweet = prompt("compose your tweet");

alert(
  "you have written " +
    tweet.length +
    " characters, you have " +
    (140 - tweet.length) +
    "characters remaiming."
);
//slicing and extracting part of a string
// the counting start from zero and make sure there is no space in between the lines
var Name = "angela";
Name.slice(0, 1);
var Name = " Angela ";
Name.slice(0, 1);
(" ");
var Name = "Angela ";
Name.slice(0, 1);
("A");
var Name = " Angela ";
Name.slice(1, 3);
("An");
var Name = " Angela ";
Name.slice(0, 3);
(" An");
var Name = " Angela ";
Name.slice(0, 3);
(" An");
var Name = "Angela ";
Name.slice(0, 3);
("Ang");
var tweet = prompt("compose your tweet");
var tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);
//or you do it like this
alert(prompt("compose your tweet: ").slice(0, 140));

//changing words to capital letters
var lastName = "emmanuel";
lastName.toUpperCase();

var myName = "emmanuel";
myName = myName.toUpperCase();
("EMMANUEL"); //output of the code this allow the code to be capital when you refresh yhe page or assigned the same variables

//assignment to on udemy
//Create a var that stores the name that user enters via prompt
var job = prompt("what is your name : ");
// capitalize the first letter of their name
console.log(job);

//Isolate the first char
var firstChar = job.slice(0, 1);
console.log(firstChar);

//Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();
console.log(upperCaseFirstChar);

//isolate the rest of the name
var restOfName = job.slice(1, job.length);
console.log(restOfName);

//change the rest of the name to lower case
restOfName = restOfName.toLocaleLowerCase();

//contatentation the first char with the rest of the char

var capitaliseName = upperCaseFirstChar + restOfName;
console.log(capitaliseName);
//we use the capitalize vesion of their name to greet then using an alert
alert("hello," + capitaliseName);

//another way to solve this
//Create a var that stores the name that user enters via prompt
var job = prompt("what is your name : ");
// capitalize the first letter of their name

//Isolate the first char
var firstChar = job.slice(0, 1);

//Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

//isolate the rest of the name
var restOfName = job.slice(1, job.length);

//change the rest of the name to lower case
restOfName = restOfName.toLocaleLowerCase();

//contatentation the first char with the rest of the char

var capitaliseName = upperCaseFirstChar + restOfName;
//we use the capitalize vesion of their name to greet then using an alert
alert("hello," + capitaliseName);

//another assessment to be completed
var humanAge = prompt("what is your dog age :");
totalAgeOfTheDog = (humanAge - 2) * 4 + 21;
alert("your dog is " + totalAgeOfTheDog + "years old in human years,");
//numbers in javascripts
var humanAge = prompt("what is your dog age :");
totalAgeOfTheDog = (humanAge - 2) * 4 + 21;
alert("your dog is " + totalAgeOfTheDog + "years old in human years,");

var x = 5;
x = x + 1;
console.log(x);
//output is 6 but instead we can do
//create another variable
var y = 6;
y++; //increment operators
console.log(y);
var z = 6;
z--; // decrement opertors
console.log(z);
//if you want to increse value by more than 1
var a = 5;
a += 2; //7 is the answer
console.log(a);
var num = 12;
num /= 3;
console.log(num);
var b = 16 % 4;
console.log(b);
var ab = 3;
var abc = ab++;
abc += 1;
console.log(abc);
//function with parameters
function getMilks(bottles) {
  var Name = bottles;
  console.log("please help me buy " + bottles + " of milk");
}
getMilk(12);
//finction
function getMilk(money) {
  var numberOfbottles = Math.floor(money / 1.5);
  console.log("please help me buy " + numberOfbottles + " of milk");
}
getMilk(12);

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function lifeInWeeks(age) {
  var yearsRemaining = 56 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left."
  );
}
lifeInWeeks(23);
console.log("Welcome to Programiz!");
//return function
function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return Math.floor(bmi);
}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);

function aFunction() {
  var a = 12;
  var b = 7;
  return a - b;
}
var bmi = aFunction(12, 7);
console.log(bmi);

function aFunction(a, b) {
  return a * b;
}
var bmi = aFunction(3, 4);
console.log(bmi);
//math.random
var n = Math.random();
console.log(n);

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

prompt("what is your name");
prompt("what is there names");
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("your love score is " + loveScore);

// bro code lesson
let a;
let b;
let c;

/* a = prompt("enter side a"); //this allow you convert numver to string
 a =  Number(a);

 b = prompt("enter side b");
 b = Number(b);

// c = Math.pow(a, 2) + Math.pow( b, 2);
// c =Math.sqrt(c)
//less steps;
c = Math.sqrt(Math.pow(a, 2) + Math.pow( b, 2));
console.log("side c :", c); */

document.getElementById("submitbutton").onclick = function () {
  a = document.getElementById("texta").value;
  a = Number(a);

  b = document.getElementById("textb").value;
  b = Number(b);

  // c = Math.pow(a, 2) + Math.pow( b, 2);
  // c =Math.sqrt(c)
  //less steps;
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("labelcresult").innerHTML = " side c: " + c;
};

//counter from 0
let count = 0;
document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};

// anthoner way of counter
let x;
let y;
let z;

document.getElementById("rollbutton").onclick = function () {
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 90) + 1;
  z = Math.floor(Math.random() * 2000000) + 1;

  document.getElementById("xrolldices").innerHTML = x;

  document.getElementById("yrolldices1").innerHTML = y;

  document.getElementById("zrolldices2").innerHTML = z;
};
//indexOf
let name = "snoop dog";
fullName = names.slice(names.indexOf(" "));
console.log(fullName);

let age = 21;
if (age >= 18) {
  console.log("you re an adult");
} else {
  consolelog(
    "you re not an adult wait to reach the adulthood to join the platform"
  );
}

let ageed = prompt("enter your age");
if (age >= 18) {
  console.log("you re an adult");
} else if (age >= 65) {
  console.log("you re an adult ");
} else {
  console.log(
    "you re not an adult wait to reach the adulthood to join the platform"
  );
}
console.log(ageed);

//method chaning
let userName = "bro";
let letter = userName.charAt(0).toUpperCase().trim();
console.log(userName);
// conditional statement
/*document.getElementById("myButton").onclick = function () {
  if (document.getElementById("myCheckBox").checked) {
    console.log("you re subscribe");
  } else {
    console.log("you re not subscribe");
  }
};*/

document.getElementById("myButton").onclick = function () {
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const masterCardBtn = document.getElementById("masterCardBtn");
  const palPayBtn = document.getElementById("palPayBtn");
  if (myCheckBox.checked) {
    console.log("you re subscribe");
  } else {
    console.log("you re not subscribe");
  }
  if (visaBtn.checked) {
    console.log("you re paying with a visa card");
  } else if (masterCardBtn.checked) {
    console.log("you re paying with a mastercard");
  } else if (palPayBtn.checked) {
    console.log("you re paying with a paypal");
  } else {
    console.log("you must select a payment mETHOD TYPE");
  }
};
//
let grade = "F";
if (grade == "a") {
  console.log("you did great");
} else if (grade == "b") {
  console.log("you did good");
} else if (grade == "c") {
  console.log("you did good");
} else if (grade == "d") {
  console.log("you did good");
} else if (grade == "e") {
  console.log("you did good");
} else if (grade == "f") {
  console.log("you did good");
} else {
  console.log(grade, "is not a letter grade");
}
//
let grades = "F";
switch (grades) {
  case "A":
    console.log("you did great");
    break;
  case "b":
    console.log("youd did good");
    break;
  case "c":
    console.log("youd did good");
    break;
  case "d":
    console.log("youd did good");
    break;
  case "e":
    console.log("youd did good");
    break;
  case "f":
    console.log("youd did good");
    break;
  default:
    console.log(grades, "is not a letter grade");
}

// swithcvh
let grade1 = 65;
switch (true) {
  case grade1 >= 90:
    console.log("you score an A");
    break;
  case grade1 >= 80:
    console.log("youd did score B");
    break;
  case grade1 >= 70:
    console.log("youd did good c");
    break;
  case grade1 >= 60:
    console.log("youd did good d");
    break;
  case grade1 >= 50:
    console.log("youd did good e");
    break;
  case grade1 > 40:
    console.log("youd did good f9");
    break;
  default:
    console.log(grade1, "is not a letter grade");
}

//&& both condition must be true
let temp = 15;
if (temp > 0 && temp < 30) {
  console.log("the wather is good");
} else {
  console.log("the waeathe ris bad");
}
// || either one condition can be true
let temps = 15;
if (temps <= 0 || temps >= 30) {
  console.log("the wather is good");
} else {
  console.log("the waeathe ris bad");
}
let tempss = 15;
let sunny = false;
if (tempss <= 0 || temps >= 30 || sunny) {
  console.log("the wather is good");
} else {
  console.log("the waeathe ris bad");
}
//
let tempt = 23;
let sunnys = false;
if (!(tempst > 0)) {
  console.log("it is cold outside");
} else {
  console.log("the waeathe is warm");
}
if (!sunnys) {
  console.log("it is cloudy outside");
} else {
  console.log("it is sunny outside");
}
//while loop
let UserName = "";
while (UserName == "") {
  UserName = Window.prompt("enter your name");
}
console.log("hello", UserName);
/*while (1==1) {
  console.log("emmy dev");
}*/

for (let i = 1; i <= 20; i += 1) {
  if (i == 13) {
    continue;
  }
  console.log(i);
}

// nested loop
let symbol = prompt("enter a symbol");
let rows = prompt("enter # of a rowa");
let columns = prompt("enter # of a column");

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j < columns; j += 1) {
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}
function startProgrma() {
  let chinSo = 21;
  let emmyDev = "bro";
  happyBirthday(chinSo, emmyDev);
}
startProgrma();
function happyBirthday(chinSo, emmyDev) {
  console.log("happy birhaday");
  console.log("happy birhaday");
  console.log("happy birhaday");
  console.log("happy birhaday");
  console.log("happy birhaday");
  console.log("happy birhaday");
  console.log("happy birhaday", emmyDev, "God bless you more");
}
//return= returns a value back to the place where you invoked a function.
let area;
let width;
let height;
width = prompt("enter width");
height = prompt("enter height");
area = getArea(width, height);
console.log("the areas is", area);
function getArea(width, height) {
  let result = width * height;
  return result;
}
//tenary operator=shortcut for an if/else statement
//condition?exprIFTrue:exrIFFalse
let adult = checkAge(21);
console.log(adult);
function checkAge(age) {
  /* if(age>=18){
    return true
  }
  else{
    return false
  }*/
}
//another way in writing this
let adults = checkAge(21);
console.log(adults);
function checkAge(age) {
  return age >= 18 ? true : false;
}
function checkWinner(win) {
  win ? console.log("you win") : console.log("you loose");
}
checkWinner(true);

//toLocaleString()=return a string with a language sensitive represnetation of thisnyou can choose or find out more on it online
let myNum = 123456.789;
myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "usd" });
console.log(myNum);
//toLocaleString()=return a string with a language sensitive represnetation of this
let myNums = 123456.789;
myNum = myNum.toLocaleString(undefined, { style: "percent" });
console.log(myNums);
//template literals backtips``
let userNames = "bro code";
let items = 3;
let total = 75;
let text = `hello ${userNames} your items is ${items} and the total number of all is ${total}`;
document.getElementById("label").innerHTML = text;

//guessing game
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
document.getElementById("submitBtn").onclick = function () {
  let guess = (document.getElementById("guessField").value = guesses += 1);

  if (guess == answer) {
    alert(`${answer} is the #. it took you ${guess} guess`);
  } else if (guess < answer) {
    alert("too small !!!!!!!!!!!!!");
  } else {
    alert("too large");
  }
};

//project 1 convert ces and frahre
document.getElementById("submitButton").onclick = function () {
  let temperature;
  if (document.getElementById("cbutton").checked) {
    temperature = document.getElementById("txtbox").value;
    temperature = Number(temperature);
    temperature = toCelsius(temperature);
    document.getElementById("temperaturelabel").innerHTML = temperature + "oC";
  } else if (document.getElementById("fbutton").checked) {
    temperature = document.getElementById("txtbox").value;
    temperature = Number(temperature);
    temperature = toFahrenheit(temperature);
    document.getElementById("temperaturelabel").innerHTML = temperature + "oF";
  } else {
    document.getElementById("temperaturelabel").innerHTML =
      "select a unit please to complete this process";
    alert("fill in the form");
  }
};

function toCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}
function toFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
}

//array

let friut = ["apple", "oranges", "banana"];
// to change the content in ana arry with a new letter
friut[1] = "yan";
//console.log(friut[0]); to select an array
console.log(friut);
// to add an element in an array
friut.push("lemon"); //push is use to add
//to remove last an element in an array pop
friut.pop();
//add element to begining
friut.unshift("mango");
// shift will remove thebegging element in an array
friut.shift();

// know the length of an array
let length = friut.length;
console.log(length);
//index
let index = friut.indexOf("banana");
console.log(index);

let price = [5, 10, 15, 20];
//acesending order
for (let i = 0; i < price.length; i += 1) {
  console.log(price[i]);
}
// in descending order
for (let i = price.length - 1; i >= 0; i -= 1) {
  console.log(price[i]);
}
//better way to do this
for (let prices of price) {
  console.log(prices);
}

//sorting an array of string in javascripts
let fruits = ["banana", "apple", "orange", "mango"];

//sorting an array in alphabetical order
fruits = fruits.sort();
//soertin in reserver alhbetical order method chaning
fruits = fruits.sort().reverse();

for (let fruit of fruits) {
  console.log(fruit);
}
// creating a 2d array of arrays
let food = ["rice", "bean", "yam"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [food, vegetables, meats];

groceryList = [2][2] = "steak";

for (let list of groceryList) {
  for (let food of list) {
    console.log(food);
  }
}

//spread operator
/*
let numbers=[1,2,3,4,5,6,7,7,8,];
let maximium=Math.max(...numbers);
console.log(maximium);*/

let class1 = ["spongebob", "patricks", "sandy"];
let class2 = ["emmanule", "emmydev", "joseph"];
class1.push(...class2);
console.log(...class1);


//rest parameter=represent an identifier number
//...                          of parameters
//             (packs argument into an array)

let a=1;
let b=2;
let d=4;
let e=5;
/*
console.log(sum(a,b,c,d));
function sum(a,b){
  return a+b;
}
function sum(a,b,c){
  return a+b+c;
}
function sum(a,b,c,d){
  return a+b+c+d;
}*/
// you can pass any argument in the function call a,b,c,d 
console.log(sum(a,b,e,d));
function sum(...numbers){
  let total=0;
  for(let number of numbers){
    total+=number
  }
  return total
}

// callback = a function passed as an argument

// to another function.
sum(2, 3, displayConsole);
sum(2,3,displayDom )

function sum(x,y, callback){
let result=x+y;
callback(result);
}//name this anything e.g callback or anything



/*let total = sum(2,3);
displayDom(total);
function sum(x,y){
let result=x+y;
return result
}*/
function displayConsole(output){
  console.log(output);
}
function displayDom(output){
  document.getElementById("labeldom").innerHTML=output;
}

//array.foreach()=executes a provided callback function 
// once for each array element
// it will display the letters capitalize

let students =["emmy","adex","emmydev"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element,index,array){
  array[index]=element[0].toUpperCase()+element.substring(1);

}

function print(element){
  console.log(element)
}

// array.map()=

let numbers = [1, 2, 3, 4, 5];
let squ = numbers.map(square);
let cubes = numbers.map(cube);
//squ.forEach(print)
cubes.forEach(print);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

function print(element) {
  console.log(element);
}
// array.filter()=creats a new array with all elements
//that pass the test provided by a function

let ages = [12, 23, 18, 78, 34, 75];
let adultHood = ages.filter(checkAge);
adultHood.forEach(print);

function checkAge(element) {
  return element > 13;
}

function print(element) {
  console.log(element);
}
//football gaming score result
let scoreJohn =Math.ceil((20 +30 + 100) / 3);
let scoreMike =Math.ceil((12 + 12 + 50)/3);
let scoreMary=Math.ceil((1+ 20 +67)/3);
let results=(scoreMike,scoreMary,scoreJohn);

console.log(scoreMike,scoreMary,scoreJohn);
if (scoreJohn>scoreMike && scoreJohn > scoreMary){
    console.log("john team wins with" + scoreJohn + "point")
}else if(scoreMike>scoreJohn && scoreMike>scoreMary){
    console.log("mike team wins with" + scoreMike + "point")
}else if(scoreMary>scoreJohn && scoreMary>scoreMary){
    console.log("mary team wins with" + scoreJohn + "point")
}else{
    console.log("there is a draw")
}
console.log(results);