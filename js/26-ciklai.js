/* JS galimi ciklai ir 'cikliskos' funcijos/metodai:
(JS funkcijos) kitas budar 
-for
-for-in
-for-of
-while
-do-while

(metodai)
-foreach
-map
-filter
-reduce
-sort
*/

const list = [1, -5, 78, 2, 11, -14, 0, -3];

//For
//break: nutraukia ciklo darba (pvz jei is didelio saraso ieskai tris pagal sarasa ir tada break)
//continue: eiti i sekancia ciklo iteracija, jei tokia yra


for (let i=0; i< list.length; i++) {
    const item = list[i];
    if (item < -10) {
        break;
    }
console.log(item);
}

// FOR-IN (automatiskai eina per lista)

for (const i in list){
    const item = list[i];
if (item < -10) {
    break;   //veikia ir continuo funcija
}
console.log(i, item);
}

// FOR-OF

for (const item of list) {  //item gali buti ir kitas pavadinimas
if (item < -10) {
    break;
}
console.log(item);
}

console.clear();

//While (tol kol) (daryk, tol kol nepadarei viso darbo). turi buti zinomas daru sarasas
//kai sunku numatyti kiek kartu reikes cikla sukti kol gausime rezultata (per kiek dienu pastatysi name pvz.)

let randomNumber = 0;      //Math.random();   //gauname random skaiciu ([0..1) nuo 0 imtinai iki 1 (vieneto niekada neismes)) 
let randomNumberCount = 0;

while (randomNumber < 0.9) {
    randomNumber = Math.random();
    randomNumberCount++;
console.log(randomNumberCount, randomNumber);
}

let i = 0;
 while ( i< list.length) {
     const item = list[i];
     if (item < -10) {
         break;   // !!continue begale kartu sukasi. JIS NEGALI BUTI NAUDOJAMAS
     }
  console.log(item);
  i++;
 }

 console.clear();

 //DO-WHILE daro kol pasiekia rezultata
//pirmiausiai klausia ir po to daro
//break leidziamas naudoti, continue-ne

 let dwi = 0;
 do {
console.log(dwi);
dwi++;
 } while (dwi < 5)  // jei nebutu while tuomet baigtu ties 0



 console.clear();

 //FOREACH soko ant saraso ir dirbo ir ziuri ka reikia daryti

 let suma = 0;

 list.forEach(function (item) {
     suma += item;
console.log(item);

 })
 console.log(suma);

 /********************/ 

 list.forEach(function (item, i, arr) {   //gali buti ir vien tik item ar i ar arr
console.log(i, item, arr);                  // jo sustabdyti negalima, jei yra sarasas nuo pradziu iki galo varo

 })

 /*55555555555*/

 list.forEach(item => suma += item)    //susumuok sarasa
    
    /* */

    let FEsuma = 0;
    list.forEach(n => FEsuma += n)
    console.log(FEsuma);

    /*0000000000000000000000*/

    const doubleList = [[1, 5], [8, 99], [-8, -7, 15, 4], [3]];
    let d1Suma = 0;

    doubleList.forEach(innerList => innerList.forEach(n => d1Suma +=n));
        console.log(d1Suma);


        //MAP modifikuoti arrejaus reiksmes
        // map() metodas perejes per duota sarasa graina tokio pacio dydzio sarsa, tik su pakeistomis reiksmemis

const mapList = [1, 2, 3, 4, 5, 6];
const forListSquare = [];
for (const num of mapList){
mapListSquare.push(num * num);

}
console.log(forListSquare);

// iskarto grazina atsakymus ir grazina tame paciame formate
const mapListSquare = mapList.map(n => n *n);
console.log(mapListSquare);

/******************************/
//uzdavinys:visi neigiami skaiciai konvertuojami i nulius, teigiami paliekami tokie patys
const pazymiai = [10, -8, 2, -6, 8, -2];

const konvertuotiPazymiai = pazymiai.map(n => n < 0 ? 0 : n);
console.log(pazymiai);
console.log(konvertuotiPazymiai);

////

console.clear()

const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.01];
const sveikieji = desimtainiai.map(n => Math.round(n));

console.log(desimtainiai);
console.log(sveikieji);

//////////// ant textu mapas neveikia

/****************************/

for (let i=0; i<desimtainiai.length; i++) {
desimtainiai[i] = Math.round(desimtainiai[i]);

}
console.log(desimtainiai);

console.clear();

//FILTER jis atfiltruoja tik reikalingus duomenis
//atrinkti tik tikrus pazymius [1...10]

const pazymiai = [10, -8, 2, -8, 2, -2];
const filteredMarks = marks.filter(m => m > 0);

console.log(marks);
console.log(filteredMarks);

//////////////// jei yra 55
const pazymiai = [10, -8, 2, -8, 2, -2, 55, 55];
const filteredMarks = marks.filter(m => m > 0 && m < 11);

console.log(marks);
console.log(filteredMarks);
///////////// jei yra 3.14
const pazymiai = [10, -8, 3.14, -8, 2.8, -2, 55, 55];
const filteredMarks = marks.filter(m => m >= 1 && m <= 10 && m % 1===0);

console.log(marks);
console.log(filteredMarks);

console.clear();
/****************************/
//palikti zodzius is didziosios raides

const dictionary = ['Labas', 'rytas', 'Lietuva'];
const isDidziosiosRaides = dictionary.filter(word => word[0] === word[0].toUpperCase());
                    /// jei noresi isrinkti visas zodis kad butu uperkase tada [0] nereikia nurodyti pirmos raides
console.log(dictionary);
console.log(isDidziosiosRaides);

//REDUCE 
//eina per sarasa, paima visas reiksmes is eiles ir su jomis padaro viena bendra rezultata
//pvz. jei turime pazymiu sarasa tai eina per pazymius ir suskaiciuoja pazymiu suma

const petriukoPazymiai = [10, 2, 8, 6, 4];

let petriukoPazymiuSuma = 0;  //=20; jei pridedame 20
petriukoPazymiai.forEach(p => petriukoPazymiuSuma += p);
console.log(petriukoPazymiuSuma);

////////////// su reducu
const reducedPazymiai = petriukoPazymiai.reduce((total, paz) => total + paz); ////,20); tuomet prides 20 prie vidurkio
console.log(reducedPazymiai);

/// koks gausis tekstas, jei sujungsime visu zodziu pirmas raides
const dictionary2 = ['Labas', 'rytas', 'Lietuva'];

const short = dictionary2.reduce((total, word) => total + word[0], '');    /// '' initial value, tada pirma zodi paima pirma raide
console.log(short);

