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

/*//Factory Function (funcs with funcs)
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


