function daugyba (a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
    if (typeof b !== 'number') {
        return 'Antrasis skaicius turi buti skaiciaus reiksmes'
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
