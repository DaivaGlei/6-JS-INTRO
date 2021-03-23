// yra 5 funcijos (+-*/)

function suma(a, b) {
return a+b;

}
const atsSuma = suma(8, 5);
console.log(atsSuma);

function atimtis(a, b) {
    return a-b;
    
    }
    const atsAtimtis = atimtis(8, 5);
    console.log(atsAtimtis);

    //****************************
   //bevardes funcijos priskirimas kintamajam
   
    const atimtis = funcion (a, b) {
        return a - b;
    }

    const atsAtimtis = atimtis(8, 5);
    console.log(atsAtimtis);

//************************* */
//arrow function priskyrimas kintamajam
const daugyba = (a, b) => {
    return a * b;
}

const atsDaugyba = daugyba(8, 5);
console.log(atsDaugyba);

//dalyba
//arrow funcion priskiriamas kintamajam
//jei logika turi tik viena procedura, tai galima nerasyti riestiniu ir return;
const dalyba = (a, b) => {
    return a / b;
}

const atsDalyba = dalyba(8, 5);
console.log(atsDaugyba);

//arrow function
// {} nenaudoti

const dalyba = (a, b) => a / b;

const atsDalyba = dalyba(8, 5);
console.log(atsDaugyba);

//kvadratu
// jei parametru yra tik vienas, tada galima nerasyti ()

const kvadratu = a => a * a;

const atsKvadratu = kvadratu(8, 5);
console.log(atsKvadratu);

//-------------------------

const vardas = 'Vardenis';

const pirmRaide = name => name[0]; //galima rasyti ir viena n raide

const raide = pirmaRaide(vardas);
console.log(raide);

//-------------------

const vardas = 'Pedro';

const pirmRaide = name => name[0]; //galima rasyti ir viena n raide
const paskutineRaide = name => name => name[name.lenght -1];
const raide = paskutineRaide(vardas);
const paskutine = paskutineRaide(vardas);
console.log(raide);
console.log(paskutine);

