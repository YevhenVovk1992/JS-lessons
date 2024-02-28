'use strict';

/* Отримати середній бал по успішності студентів. Залачу вирішити двама способами */

let students = {
    js: [
        {name: 'John', progress: 100},
        {name: 'Andre', progress: 60}
    ],
    html: {
        basic: [
            {name: 'Alex', progress: 20},
            {name: 'Ann', progress: 18}
        ],
        pro: [
            {name: 'SAm', progress: 10}
        ]
    }
};

function getAwgProgressByIteration (studentsList) {
    let totalProgres = 0,
        countStudets = 0;

    for (let course of Object.values(studentsList)) {        

        if (Array.isArray(course)) {
            course.forEach(item => {
                countStudets += 1;
                totalProgres += item['progress'];
            })
        } else {
            for (let subCourse of Object.values(course)) {
                subCourse.forEach(item => {
                    countStudets += 1;
                    totalProgres += item['progress'];
                });
            }
        }
    }
    return totalProgres / countStudets;
}

function getAwgProgressByRecursion (studentsList) {
    
    if (Array.isArray(studentsList)){
        let total = 0;

        studentsList.forEach(item => {            
            total += item['progress'];
        });
        
        return [total, studentsList.length];

    } else {
        let total = [0, 0];
       
        for (subCourse of Object.values(studentsList)) {
            const data = getAwgProgressByRecursion(subCourse);

            total[0] += data[0];
            total[1] += data[1];
        }
        return total;
    }        
}

console.log(getAwgProgressByIteration(students));
const resultRecursion = getAwgProgressByRecursion(students);
console.log(resultRecursion[0] / resultRecursion[1]);

