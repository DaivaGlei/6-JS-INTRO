   // '...' operatorius spread
// yra kai sarasa mes isskleidziame panariui
//sujungti sarasus i viena vieta

const spread1 = [5, 9];
console.log(spread1);

//const spread2 = [5, 9, 7]
const spread2 = [spread1[0], spread1[1], 7];
console.log(spread2);

const spread3 = [7, 5, 9];
console.log(spread3);

const spread2 = [...spread1, 7, 77, 777]
//sulieti du dalykus i viena vieta, kai noras yra papildyti 
// ... operatorius paima visa nurodyta arreju
// gilesnes kopijos nera giliakraujes, arejus viduje arejaus nukopijuoja bet kaip areju
const spread4 = ['anbd', 4, true];
const spread5 = [...spread4, ... spread1];  //sujungia du arejus i viena

//rest operatorius, naud. pas funcija kai norima surinti visus likusius parametrus i bendra sarasa

const average = (...list) => {
const sum = list.reduce((total, num) => total + num, 0);
return sum / list.length;


}
const  ave = average(10, 2, 8, 4, 6);

//average([10, 22, 5, 6]); //visa lista paduoda atgal
average(10, 22, 4, 6);  //paima tik pirma listo duomeni

const apieMane = (mane, age, ...list) => {
return `Sveiki, as esu ${name}, man yra ${age} metu ir as megstu: ${list.join(',')} `;

}
const petras = apieMane('Petras', 55, ['obuoliai', 'kriause']);
///jei iterpiame arejus tuomet rasome be ...list, 
//jei ...list tada galima nurodyti duomenis eiluteje be arejaus

console.clear();
//primityvios reiksmes
let a = 5;         
let b = 999;

b = a;  ///nauja b reiksme yra a t.y 5.

console.log(a);
console.log(b);

a=777;

console.log(a);
console.log(b);
//paskutines galiojancios reiksmes lieka, po visu pasikeitimu
a= 777, o b=5

//kompleksines reiksmes
//arejaus lygyje

let cc = [4, 44];
let dd = [8, 88];

console.log(cc);
console.log(dd);

dd = cc;

console.log(cc);
console.log(dd);

cc[0]= 1111;

console.log(cc);
console.log(dd);
// komplelsines reiksmes pasikeicia tos pacios reiksmes
//naviguoja adresais, bet ne kintamaisiais. 


