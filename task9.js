"use strict";

/* У вас есть список учеников, которые хотят поиграть в игру:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент. */

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'mmn'];

function sortStudentsByGroups(arr) {
    let commandList = [],
        counter = 0,
        cachStr = '',
        extraStudents = [];        
    arr.sort();

    for (let student of arr) {        
        counter += 1;
        cachStr += student + '-';        
        if (counter === 3) {
            commandList.push(cachStr.split('-').slice(0, -1, 1));
            cachStr = '';
            counter = 0;
        }
    }  

    extraStudents = cachStr.split('-').slice(0, -1, 1);
    extraStudents.length === 0 ? commandList.push(`Оставшиеся студенты: -`) : commandList.push(`Оставшиеся студенты: ${extraStudents.join(', ')}`);        
    return commandList;
}

console.log(sortStudentsByGroups(students))