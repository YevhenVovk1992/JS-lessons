function calculateVolumeAndArea(a) {
    let area, 
        volume;

    if (!Number.isInteger(a) || a < 0) {
        return 'При вычислении произошла ошибка';
    }
    
    area = (a * a) * 6;
    volume = a * a * a;
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}


function getCoupeNumber(placeNumber) {
    if (!Number.isInteger(placeNumber) || placeNumber < 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }

    if (placeNumber === 0 || placeNumber > 34) {
        return 'Таких мест в вагоне не существует';
    }

    const coupeNumber = placeNumber / 4;
    return Math.ceil(coupeNumber);

}


