/* Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). 
Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - 
функция возвращает строку "Ошибка, проверьте данные".
Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты. */

function getTimeFromMinutes(minuteStr) {
    // Check input number
    if (typeof(minuteStr) !== 'number' || minuteStr < 0 || !Number.isInteger(minuteStr)) {
        return "Ошибка, проверьте данные"
    }

    let hourNumber,
        minuteNumber,
        resultStr;

    hourNumber = Math.floor(minuteStr / 60);
    minuteNumber = minuteStr - hourNumber * 60;

    //Create true string for differnt hour
    switch (hourNumber) {
        case 0:
            resultStr = `Это ${hourNumber} часов и ${minuteNumber} минут`;
            break;
        case 1:
            resultStr = `Это ${hourNumber} час и ${minuteNumber} минут`;
            break;
        case 2:
        case 3:
        case 4:        
            resultStr = `Это ${hourNumber} часа и ${minuteNumber} минут`;
            break;
        default:
            resultStr = `Это ${hourNumber} часов и ${minuteNumber} минут`;

    }
    return resultStr;
}

console.log(getTimeFromMinutes(60))
console.log(getTimeFromMinutes(150))
console.log(getTimeFromMinutes(0))
console.log(getTimeFromMinutes('60'))
console.log(getTimeFromMinutes(-60))

/*Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.*/

function findMaxNumber(...args) {
    const a =  arguments[0],
        b =  arguments[1],
        c =  arguments[2],
        d = arguments[3];

    if (arguments.length < 4 || 
        (a * b * c * d) === 0 || 
        (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number')) {
            return 0;
    }
    
    return Math.max(a, b, c, d);

}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, 6.6, '11'));
console.log(findMaxNumber(1, 5, 6.6));
console.log(findMaxNumber(1, 5, 6.6, 0));