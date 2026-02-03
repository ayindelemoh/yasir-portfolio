/*  Print your name and age.
Create two variables a and b, assign numbers, and print their sum.
Create an array of your 3 favorite foods and print the first one.
Create an object for yourself with name, age, and hobby.
Use console.log() to display a sentence like:
“My name is ___, I’m ___ years old, and I love ___.”
*/
let name = "Yasir"
let age = 12
let a = 18
let b = 21
console.log("My name is " + name + " and I am " + age +" years old")
console.log(a + b)

let food = ["Beans", "Plantain","Jollof-rice", "You"]
console.log("My breakfast yesterday was " + food[3])

let me = [
    names = "Yasir",
    ages = 14,
    food = "Beans, plantain, Jollof-rice and You",
    hobbies = "Playing football and sleeping",
]
console.log(`My name is ${name}, I am ${age} years old and i love ${hobbies} and my favorite foods are ${food}`)
/*
Write a program to find the sum, difference, product, and quotient of two numbers.
Find the remainder when 25 is divided by 4.
Given a variable num = 5, increase its value by 3 using the += operator.*/
//Swap the values of two variables a and b (without using a third variable)                                                                             
                                                                                           
//Convert temperature from Celsius to Fahrenheit:
//Formula: F = (C × 9/5) + 32
let celsius = 30
let fahrenheit = (celsius * 9/5) + 32                               
console.log(fahrenheit)

let firstNumber = 5
let secondNumber = 20
let randomNumber = -23
console.log(secondNumber + firstNumber);
console.log(secondNumber - firstNumber);
console.log(secondNumber * firstNumber);
console.log(secondNumber / firstNumber);
console.log(25 % 4)
console.log(firstNumber += 3)
if (randomNumber < 0){
    console.log("It is negative")
}
else if (randomNumber > 0){
    console.log("It is positive")
}
else{
    console.log("It is obviously zero")
}

if((secondNumber % 3) && (secondNumber % 5)){
    console.log("It is divisible by both 3 and 4")
}
else{
    console.log("I t is not divisible by both 3 and 5")
}
/* Check if a number is positive, negative, or zero.

Check if a number is divisible by both 3 and 5.

Write a program that checks if two numbers are equal or not equal.

Check if a person is eligible for a driver’s license (age ≥ 18).

Given two numbers, print the larger one.
 */

if(firstNumber == secondNumber){
    console.log("They are equal")
}
else{
    console.log("They are not equal")
}
if(age >= 18){
    console.log("You are eligible for a driver's license")
}
else{
    console.log("You are not eligible for a driver's license")
}   
let num1 = 45
let num2 = 67 
if(num1 > num2){
    console.log(num1)
}
else{
    console.log(num2)
}
/**
 Check if a number is within the range 10–50.

Given three numbers, print the largest of the three.

Given three side lengths, check if they can form a triangle:

The sum of any two sides must be greater than the third side.
 */
let num4 = 44
if(num4 >= 10 && num4 <= 50){
    console.log("It is within the range")
}
else{
    console.log("It is not within the range")
}

let num5 = 78
let num6 = 34
let num7 = 56
if(num5 > num6 && num5 > num7){
    console.log(num5)   
}
let triangleSide1 = 3
let triangleSide2 = 4
let triangleSide3 = 5
if((triangleSide1 + triangleSide2 > triangleSide3) && (triangleSide1 + triangleSide3 > triangleSide2) && (triangleSide2 + triangleSide3 > triangleSide1)){
    console.log("They can form a triangle")
} 
else{
    console.log("They cannot form a triangle")
}

/**
 * Take a person’s score (0–100) and print their grade:
90–100 → A
75–89 → B
60–74 → C
40–59 → D
below 40 → F
*/
let score = 85
if(score <= 100 && score >= 90){
    console.log("Grade A")
}
else if(score <= 89 && score >= 75){
    console.log("Grade B")
}
else if(score <= 74 && score >= 60){
    console.log("Grade C")
}
else if(score <= 59 && score >= 40){
    console.log("Grade D")
}
else {
    console.log("Grade F")
}
/*
Check if a year is a leap year:
A leap year is divisible by 4 but not by 100, unless also divisible by 400.
*/
let year = 2000
if(year % 4 == 0 && year % 100 != 0 ){
    console.log("It is a leap year")
}
else{
    console.log("It is not a leap year")
}
/*
A shop gives discounts:
If amount > 1000 → 20% discount
If amount > 500 → 10% discount
Else → No discount
Write a program that calculates the final amount.
*/
let amount = 950
if(amount >= 1000){
    console.log("Your discount is 20%")
}
else if(amount >=500){
    console.log("Your discount is 10%")
}
else{
    console.log("No discount at all")
}
if(amount > 1000){
    amount = amount - (amount * 0.20)
}
else if(amount > 500){
    amount = amount - (amount * 0.10)
}
else{
    console.log("No discount at all")
}
console.log("The final amount is " + amount)


/**
Check whether a given character is a vowel or a consonant.
*/
let char = "b"
let vowel =["a","e","i","o","u"]
let consonants =["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
if(vowel.includes(char)){
    console.log("It is a vowel")
}
else if(consonants.includes(char)){
    console.log("It is a consonant")
}
else{
    console.log("It is not a letter")
}

/*
Check if a given password is strong:
At least 8 characters
Contains a number
Contains an uppercase letter
 */
let password = "Yasir123"
let hasUppercase = /[A-Z]/.test(password);
let hasNumber = /\d/.test(password);
if(password.length >= 8 && hasUppercase && hasNumber){
    console.log("It is a strong password")
}
else{
    console.log("It is not a strong password")
}
// Print numbers from 1 to 10.

for (j = 1; j <= 10; j++){
    console.log(j)
}
//Print even numbers between 1 and 20.
for(h = 0; h <= 20; h +=2){
    console.log(h)
}
//Find the sum of numbers from 1 to 100.
for(k = 20; k <= 100; k+= 20){
    sum = 0
    sum += k
    console.log(sum)
}

//Print the multiplication table of any number (e.g. 7 × 1 = 7 … 7 × 10 = 70).
for(m = 1; m <= 10; m++){
    console.log("7 x " + m + " = " + (7 * m))
}

//Print all elements of an array.
let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"]
for(n = 0; n < fruits.length; n++){
    console.log(fruits[n])
}

//Reverse the elements of an array (without using .reverse()).
let fruitsReversed = []
for(p = fruits.length - 1; p >= 0; p--){
    fruitsReversed.push(fruits[p])
}

//Count how many numbers between 1–50 are divisible by 3.
let count = 0
for(q = 1; q <= 50; q++){
    if(q % 3 == 0){
        count++
    }
}
console.log(count)


//Use a while loop to print numbers from 10 down to 1.
let r = 10
while (r >= 1) {
    console.log(r)
    r--
}
//Use a do...while loop to print numbers from 1 to 5.
let f = 0
do {
    console.log(f)
    f++
} while (f <= 5);
//Create a small pattern like this using for loops:
let pattern = ""
for(s = 1; s <= 5; s++){
    pattern += "*"
    console.log(pattern)
}
function forg(greetings) {
    console.log(greetings)
}
forg("Hello, World!")

function addNumbers(x, y) {
    return x + y
}       
console.log(addNumbers(5, 10))

//Replace the second item in an array with something else.
//Create an array of your 3 favorite foods and print them one by one.
let favFood = ["You","Jollof rice","Fresh Meat"]
for (let y = 0; y < favFood.length; y++) {
    console.log( favFood[y]);    
}
favFood.push("Beans")
favFood[1] = "Plantain"
console.log(favFood)

//Create an array of 5 numbers and print the sum of all numbers.
let nos = [5,6,8,7,9]
let total = 0
for (let z = 0; z < nos.length; z++) {
    total += nos[z]
}

//Add two new items to an array using .push() and .unshift().
nos.push(10)
nos.unshift(4)
console.log(nos)
//Remove the first and last items using .shift() and .pop().
nos.shift()
nos.pop()
console.log(nos)
//Use a for loop to print all items in an array.
let colors = ["Red", "Blue", "Green", "Yellow", "Purple","Orange"]
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}   
//Check if an array includes the word "JavaScript".
colors.includes("JavaScript") ? console.log("It includes JavaScript") : console.log("It does not include JavaScript")
//Find the length of an array and print it.
console.log(colors.length)
//Create an array of student names and print each with: "Welcome, [name]!"
let students = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ian", "Jack"]
for(x = 0; x < students.length; x++){
    console.log("Welcome," + students[x])
    
}
//Join all items in an array into a single string using .join()
let joinedColors = colors.join(", ")
console.log(joinedColors)

//Make a function called sayHello that prints "Hello!".
function sayHello() {
    console.log("Hello!")
}
//Make a function square(num) that returns the number squared.
function square(num) {
    return num * num
}       
console.log(square(5))
//Make a function double(num) that multiplies a number by 2.
function double(num){
    return num * 2
}
console.log(double(7))
//Make a function introduce(name, age) that says :"My name is ___ and I’m ___ years old."
function introduce(name, age){
    return `My name is ${name} and I'm ${age} years old this year`
}
console.log(introduce("Yasir",10))
//Make a function greet(name) that returns "Assalamu Alaikum, ___!".
function greet(names) {
    return "Assalam Alaikum," + names
}
console.log(greet("Brother"))

function greetUser(name) {
  let currentHour = new Date().getHours(); // To get the current time
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return ` ${greeting}, ${name}! Hope you're having a great day!`;
}
console.log(greetUser("Yasir"))
