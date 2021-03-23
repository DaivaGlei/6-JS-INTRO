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

 //FOREACH

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
