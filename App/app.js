// console.log("Your code goes here!")
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var numebr2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, numebr2, printResult, resultPhrase);
console.log(result);
