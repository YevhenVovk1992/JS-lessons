'use strict';

/*Напишите функцию, которая вычисляет факториал. */

function factorial(n) {
    if (!Number.isInteger(n)) {
        return 'error';
    }
    
    if (n <= 1) {
        return 1;
    } else {
        if (n === 2) {
            return 2;
        } else {
            return n * factorial(n -1);
        }
    }
}

console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(5.6))
console.log(factorial('hekko'))