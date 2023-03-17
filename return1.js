const readLine = require('readline-sync');

//q1
function nameSwapper() {
    let first = readLine.question("First Name: ");
    let last = readLine.question("Last Name: ");
    return(`${last}, ${first}`);
}
let myName = nameSwapper();
console.log(myName);

function numberGenerator() {
    let first = readLine.question("First Number : ");
    let last = readLine.question("Second Number : ");
    return(`${first+last}`);

}

function avg(t1,t2,t3, t4,t5,t6,t7){     
    let answer = t1+t2+t3+t4+t5+t6+t7;
    answer = answer / 7;
    answer = answer.toFixed(2);
    return(answer) }
    let total = avg(7,8,9,0,4,3,2);
console.log(total);