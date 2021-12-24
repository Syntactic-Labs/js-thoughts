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

//javascript arrays
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
console.log(square(4));

