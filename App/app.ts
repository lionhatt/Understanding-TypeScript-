function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }

}

let number1: number;
number1 = 5;
const numebr2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';
resultPhrase = 0;

add(number1 , numebr2, printResult, resultPhrase);
