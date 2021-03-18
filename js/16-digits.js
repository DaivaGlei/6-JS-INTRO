/* 3. skaitmenu kiekis skaiciuje */


function skaitmenuKiekisSkaiciuje(skaicius) {
// input validation
if (typeof skaicius !== 'number') {
    return `ERROR: turi buti skaiciaus tipas`;
}
if (!isFinite(skaicius)) {
    return `ERROR: ${skaicius} nera normalus skaicius`;

}
// logic

const tekstinisSkaicius = '' + skaicius;
let skaitmenuKiekis = tekstinisSkaicius.length;
// return result
// jei skaicius turi didesne dali, tai sumaziname 1 vienetu
if (skaicius % 1 !==0) {
    skaitmenuKiekis--;
}
//jei skaicius yra neigiamas, tai sumaziname vienetu
//const absoliutas = Math.abs(skaicius);
if (skaicius < 0) {
    skaitmenuKiekis--;
}

    return skaitmenuKiekis;
}

console.log(skaitmenuKiekisSkaiciuje(5), '->', 1);
console.log(skaitmenuKiekisSkaiciuje(781), '->', 3);
console.log(skaitmenuKiekisSkaiciuje(3.1456), '->', 5);
console.log(skaitmenuKiekisSkaiciuje(-1528), '->', 4);
console.log(skaitmenuKiekisSkaiciuje(37060123456), '->', 11);
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje(skaitmenuKiekisSkaiciuje));
