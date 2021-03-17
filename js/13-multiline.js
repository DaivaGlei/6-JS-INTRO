function daugyba (a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
    if (typeof b !== 'number') {
        return 'Antrasis skaicius turi buti skaiciaus reiksmes'
    }
    if (isNaN(a) || a === Infinity || a === -Infinity) {
        return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`;
    }
 if (!isFinite(b)) {
    return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`;
 }

 
    if ('' + a === 'NaN' || Math.abs(a) === -Infinity) {
        return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`;
    }
        const rez = a * b;
    return rez;
}



console.log(daugyba(4, 5), '->', 20);
console.log(daugyba(5, 5), '->', 25);
console.log(daugyba(9, 5), '->', 45);
console.log(daugyba(7, 5), '->', 35);

console.log(daugyba('trys', 'penki'), '->', 15);
console.log(daugyba(3, 'penki'), '->', 15);
