/* suskaiciavimas visu skaiciu intervale 
0-0 =0
0-4 = 10
0-100 = 5050
574-815 =labai didelis skaicius
-50 -50 =0
-70 -30 = santykinai didelis neigiamas skaicius (-2020)
 Ats:
 intervale nuo 0 iki 4 suma yra 10;
*/
const nuo = 0;
const iki = 4;
let sum = 0;

if (nuo <= iki) {
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
} else {
for (let i = iki; i < nuo; i++) {
    sum += i;
}
}

const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${suma} `;
console.log(ats);
