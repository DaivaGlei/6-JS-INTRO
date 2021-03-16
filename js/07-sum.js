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
        sum += i;
    }
} else {
for (let i = iki; i < nuo; i++) {
    sum += i;
}
}

const ats = `Intervale nuo ${nuo} iki ${iki} suma yra ${sum} `;
console.log(ats);

                                        /* 0-100 */

const nuo1 = 0;
const iki1 = 100;
let sum1 = 0;

if (nuo1 <= iki1) {
    for (let i = nuo1; i <= iki1; i++) {
        sum1 += i;
    }
} else {
for (let i = iki1; i < nuo1; i++) {
    sum1 += i;
}
}

const ats1 = `Intervale nuo ${nuo1} iki ${iki1} suma yra ${sum1} `;
console.log(ats1);

                                        /* 574-815 */

const nuo2 = 574;
const iki2 = 815;
let sum2 = 0;

if (nuo2 <= iki2) {
    for (let i = nuo2; i <= iki2; i++)
    sum2 += i;
} else {
     for (let i = iki2; i < nuo2; i++) {
         sum2 += i;
     }
}

console.log(`Intervale nuo ${nuo2} iki ${iki2} suma yra ${sum2}. `);

                                            /* -50 - 50 */
const nuo3 = -50;
const iki3 = 50;
let sum3 = 0;

if (nuo3 <= iki3) {
    for (i = nuo3; i <= iki3; i++)
    sum3 += i;
} else {
    for (i = iki3; i < nuo3; i++)
    sum3 += i;
}

console.log(`Intervale nuo ${nuo3} iki ${iki3} suma yra ${sum3}. `);

                                            /* -70 -30 */

const nuo4 = -70;
const iki4 = 30;
let sum4 = 0;

if (nuo4 <= iki4) {
    for (i = nuo4; i <= iki4; i++) 
    sum4 += i;
} else {
    for (i = iki4; i < nuo4; i++)
    sum4 += i;
}
console.log(`Intervale nuo ${nuo4} iki ${iki4} suma yra ${sum4}. `);

                                            /* 0 - 0 */

const nuo5 = 0;
const iki5 = 0;
let sum5 = 0;

if (nuo5 <= iki5) {
    for (i = nuo5; i <= iki5; i++)
    sum5 += i;
} else {
    for (i = iki5; i < nuo5; i++)
    sum5 += i;
}

console.log(`intervale nuo ${nuo5} iki ${iki5} suma yra ${sum5}. `);