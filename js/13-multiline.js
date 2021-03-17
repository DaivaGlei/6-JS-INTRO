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

function daugyba (k, t) {
   if (typeof k !== 'number')
   return 'Pirmasis parametras turi buti skaiciaus tipo';
    if (typeof t !== 'number')
    return 'Antrasis turi buti skaiciaus tipo';
    if (isNaN(k)) {
        return 'Pirmasis parametras turi buti normalus skaicius';
    } if (isNaN(t)) {
        return 'Antras parametras turi buti normalus skaicius'; 
    } 
        if (k === Infinity) {
    return 'Pirmasis parametras turi buti normalus skaicius';
    }
         if (t === Infinity) {
    return 'Antras parametras turi buti normalus skaicius';
         }
    const daugyba = k * t;
    return daugyba;
}

console.log(daugyba(4, 5));
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
