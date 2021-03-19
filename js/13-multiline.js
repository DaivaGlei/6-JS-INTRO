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

/* Daugybos nd
Funkcija pavadinimu “daugyba”:

priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą
TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;

*/
//https://www.codewars.com/kata/50654ddff44f800200000004/solutions/javascript

function multiply(a, b) {
   if (typeof a !== 'number')
   return 'Pirmasis parametras turi buti skaiciaus tipo';
    if (typeof b !== 'number')
    return 'Antrasis turi buti skaiciaus tipo';
    if (isNaN(a)) {
        return 'Pirmasis parametras turi buti normalus skaicius';
    } if (isNaN(b)) {
        return 'Antras parametras turi buti normalus skaicius'; 
    } 
        if (a === Infinity) {
    return 'Pirmasis parametras turi buti normalus skaicius';
    }
         if (b === Infinity) {
    return 'Antras parametras turi buti normalus skaicius';
         }
    const multiply = a * b;
    return multiply;
}
console.log(multiply(1,1), 1);
console.log(multiply(2,2), 1);


/*assert.strictEqual(multiply(2,1), 2);
assert.strictEqual(multiply(2,2), 4);
assert.strictEqual(multiply(3,5), 15);
*/
/*console.log(daugyba(4, 5));
console.log(daugyba(5, 5));
console.log(daugyba(9, 5));
console.log(daugyba(7, 5));
console.log(daugyba('fygyg', 5));
console.log(daugyba(7, 'hnknk'));
console.log(daugyba('000555', 5));
console.log(daugyba(7, '5555'));
console.log(daugyba('true', 5));
console.log(daugyba(7, 'false'));
console.log(daugyba([], 5));
console.log(daugyba(7, []));
console.log(daugyba(NaN, 5));
console.log(daugyba(7, NaN));
console.log(daugyba(Infinity, 5));
console.log(daugyba(7, Infinity));
console.log(daugyba(-Infinity, 5));
console.log(daugyba(7, -Infinity));
*/