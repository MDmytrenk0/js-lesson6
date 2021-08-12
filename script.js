'use strict'
// ----------------TASK 1----------------
let fib = n => {
    let a = 0;
    let b = 1;
    for (let i = 1; i <= n; i++) {
        let c = b;
        b = a + b;
        a = c;
        console.log(c);
    }
    return a;
}
fib(5);
fib(10);
// ----------------TASK 2----------------
// 1 спосіб
let f = function (count, mull) {
    let sum = 1;
    let number = 1;
    for (let i = 1;i < count; i++) {
        number *= mull;
        sum += number;
    }
    return sum;
}
console.log(f(5, 2));
console.log(f(4, 3));

// 2 спосіб
let f = (n, q, b1 = 1) => b1 * (1 - q**n) / (1 - q);     

console.log(f(5, 2));
console.log(f(4, 3));
// ----------------TASK 3----------------
let n = +prompt(`Ведіть число`);
let q = +prompt(`Ведіть число`);
let simpleNumber = function (n, q) {
    let str = '';
    label1:
    for (let i = n; i <= q; i++) {
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                continue label1;
            }
        }
        str += i + ' ';
    }
    return str;
}

console.log(simpleNumber(10, 15));
console.log(simpleNumber(2, 20));
