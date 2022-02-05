/*//The pyramid
let py = "#";
for (let index = 0; index < 5; index++) {

    console.log(py);
    py += "#";
}
//fizz buzz
for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) { console.log("FIZZBUZZ!!!"); }
    else if (i % 5 === 0) { console.log("Fizz"); }
    else if (i % 3 === 0) { console.log("Buzz"); }
    else { console.log(i); }
}
//2d grid
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += "b";
        } else {
            board += "w";
        }
    }
    board += "\n";
}

console.log(board);*/

/*//javascript arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors[0])
console.log(selectedColors.length)
//function
function greet(name, exp) {
    console.log(`Need no NoDe! ${name} ${exp}`)
}
greet('crazy@@@', 'Shit');
//performing a task

function square(number) {
    return number*number;
}
let number = square(4);
console.log(number);
console.log(square(4));*/

/*//Hour
//If hour is between 6am and 12pm: Good Morning!
//If it is between 12pm and 6pm: Good Afternoon!
//Otherwise: Good Evening!
let hour = 10;
let m = 'Good Morning!!';
let a = 'Good Afternoon!!';
let e = 'Good Evening!!';
let n = 'Good Night!!';
if (hour > 6 && hour < 12) console.log(m);
else if (hour >= 12 && hour < 18) console.log(a);
else if (hour >= 18 && hour < 21) console.log(e);
else console.log(n);*/

/*//Factory Function (funcs with funcs) should use camel case.
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
const circle2 = createCircle(2);
const circle3 = createCircle(3);
const circle4 = createCircle(4);
console.log(circle1,circle2,circle3,circle4);*/

/*//Constructor Fuction (should use pascal case)
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(1);*/

/*//getters and setters
const person = {
    firstName: 'Michael',
    lastName: 'Walker',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'Kristy Walker';
console.log(person);*/

//Value example. 
/*let obj = { value: 10 };
function increase(obj) {
    obj.value++
};
increase(obj);
console.log(obj);
console.log(obj.value);*/
/*
function calculatePrice(price, taxes, description) {
    //if (taxes == null) {
        //taxes = 0.05;
    //} //Does the same thing at line 119 !Check browser support!
    taxes = taxes ?? 0.05
    description = description ?? "Default item";
    const total = price * (1+taxes)
    console.log(
      `%c${description}With Tax: %c$${total}`,
      "font-weight: bold; color: red; background-color: black;",
      "color: white; background-color: blue;"
    );
}
calculatePrice(100, 0.07, "Myitem");
calculatePrice(100, 0, "My other item");
calculatePrice(100, undefined, "");
*/

/*function printFarmInventory(cows, chickens) {
let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`)
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`)
}
printFarmInventory(15,3)*/
/*
function countAndLabel(count,label) {
    let num = String(count);
    while (num.length < 3) {
        num = "0" + num;
    }
    console.log(`${num} ${label}`)
}
function printFarmInventory(aCount1,aName1,aCount2,aName2,aCount3,aName3){
  countAndLabel(aCount1, aName1);
  countAndLabel(aCount2, aName2);
  countAndLabel(aCount3, aName3);
}
printFarmInventory(12,'Cows',2,'Chicken',324,'Pigs')
*/

let greeting2 = name => console.log(`Hello ${name}!`);

const userInfo = (firstName, lastName, callback) => {
    const fullName = `${firstName} ${lastName}`
    callback(fullName);
}
userInfo('John', 'Doe', greeting2);