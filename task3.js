"use  strict";

// Место для первой задачи
function sayHello(userName) {
    return `Привет, &{userName}!`
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    const funcResult = [num - 1, num, num + 1];
    return funcResult;
}

// Место для третьей задачи
function getMathResult(numb1, numb2) {
    let funcResult = "";
  
    if (typeof(numb2) === 'string' || numb2 <= 0) {
        funcResult = numb1;
    } else {
        for (let i = 1; i <= numb2; i++) {
            funcResult += numb1 * i
            if (i === numb2) {
                continue
            } else {
                funcResult += '---'
            }
            
        }
    }    
    return funcResult;
}

console.log(getMathResult(5, 3));
console.log(getMathResult(3, 10));
console.log(getMathResult(10, 5));
console.log(getMathResult(10, '5'));

console.log(getMathResult(10, 0));
console.log(getMathResult(20, -5));
