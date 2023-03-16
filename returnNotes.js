//Parameters are placeholder variables that allow us to
//reuse functions.

//Example 1: Without Parameters
function printYes() {
    console.log("Yes")
}

printYes();
printYes();
printYes();

//Example 2: With Parameter
function printText(text){
    console.log(text)
}

printText("Happy Friday");
printText("Happy Saturday");

//Return statements provide values to the rest of the program
//Returned values can be used by other parts of the code
//console.log does not return values for the rest of your code

//Example 3: Without return
function double(n) {
    console.log(n*2);
}

double(21);
double(69);
double(420);

//Example 4: With Return
function triple(m) {
    return(m*3)
}

let lives = triple(2);
lives -=1;
lives +=2;
console.log(lives);

console.log(triple(3));

//Scope is the part of the program where the binding(value of
//a variable)is visible.
//Global scope: created outside {}, accessible everywhere
//Local scope: created inside

//Example 5: Different scopes
letx=10; //global x
if (x>1){
    let y=20; // local y
    let x=30;
    console.log(x+y+z)
}
console.log(x); //y and z are not accessible outside{}

//Example 6: No naming conflict
function half(j){
    return(j/2)
}
let j=10;
console.log(half(100));
console.log(j);