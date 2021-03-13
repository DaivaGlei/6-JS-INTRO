/* kintamuju palyginimas*/

const a = 5;
const b = 10;

if (a > b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (a < b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (a === b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
if (a !== b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (a >= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (a <= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

const tekstas = 'pomidoras';
const pomidorolength = tekstas.length;
console.log(pomidorolength);

const tekstas1 = 'arbuzas';
const arbuzolength = tekstas1.length;
console.log(arbuzolength);

const tekstas2 = 'lietuva';
const lietuvoslength = tekstas2.length;
console.log(lietuvoslength);

/*teksto tipo palyginimas kintamuju*/

const tekstas11 = 'zalias';
const tekstas22 = 'raudonas'
const zaliaslength = tekstas11.length;
const raudonolenght = tekstas22.length;
console.log(tekstas11.length);
console.log(tekstas22.length);

if (tekstas11.length > tekstas22.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (tekstas11.length < tekstas22.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (tekstas11.length === tekstas22.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (tekstas11.length !== tekstas22.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (tekstas11.length >= tekstas22.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (tekstas11.length <= tekstas22.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

const pirmagrupe = ['vienas', 'du', 'trys', 'keturi'];
const antragrupe = ['sesi', 'septyni', 'astuoni', 'devyni', 'desimt'];
const treciagrupe = ['vienuolika', 'dvylika', 'trylika'];
const pirmagrupesilgis = pirmagrupe.length;
const antragrupesilgis = antragrupe.length;
const treciagrupesilgis = treciagrupe.length;
console.log(pirmagrupe, antragrupe, treciagrupe);
console.log(pirmagrupe.length);
console.log(antragrupe.length);
console.log(treciagrupe.length);

if (pirmagrupe.length > antragrupe.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (pirmagrupe.length < antragrupe.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (pirmagrupe.length === antragrupe.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (pirmagrupe.length !== antragrupe.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (pirmagrupe.length >= antragrupe.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (pirmagrupe.length <= antragrupe.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

/*nd - Pratimas if'ams: išspausdinti patarimą ką su savimi pasiimti, kai:
- lauke šviečia / nešviečia saulė
- lyja / nelyja
- stovi vilkas / jo nėra */


const oras = 'vilko lauke nera';


if (oras === 'lauke sviecia saule') {
    console.log('pasiimk nuo saules kepure');
} else if  (oras === 'nesviecia saule') {
    console.log('kepures neimk');
} else if  (oras === 'lietus lyja') {
    console.log('pasiimk lietsargi');
} else if  ( oras === 'lietus nelyja') {
    console.log('skecio neimk');
} else if (oras === 'stovi vilkas') {
    console.log( 'neik i lauka');
} else if (oras === 'vilko lauke nera') {
    console.log( 'gali eiti i lauka');
}