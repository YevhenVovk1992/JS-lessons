"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    }

    let resultString = 'Семья состоит из: ';   

    for (let i = 0; i < (arr.length - 1); i += 2) {
        let personName = arr[i] + ' ' + arr[i+1];
        resultString += personName + ' '
    }

    return resultString.trim();        
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function (item) {
        console.log(item.toLowerCase());
    })
}

console.log(showFamily(family));
standardizeStrings(favoriteCities);