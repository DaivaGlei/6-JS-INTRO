/* centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)

https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097


 1705 /100 =17.05 
*/

/*function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(89)); */

function getPlanetName(Name) {
  return Name;
}
console.log(getPlanetName(2), '->', 'Venus');
console.log(getPlanetName(5), '->', 'Jupiter');
console.log(getPlanetName(3), '->', 'Earth');      




 /* case 4:
    name = 'Mars'
 case 5:
    name = 'Jupiter'
    case 6:
        name = 'Saturn'
      case 7:
        name = 'Uranus'
      case 8:
        name = 'Neptune'
    }
    
    return name;
  }

  switch (day) {
    case 1:
        console.log('pirm');
        break;

    case 2:
        console.log('antr');
        break;

    default:
        console.log('tokia diena neegzistuoja');
} */


/*  https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript */


/*function sumStr(a,b) {
const sumStr = '' + skaicius;
if (typeof skaicius !== 'number') {
  const suma = (a + b);
  console.log(suma);  
} 

console.log(sumStr("4","5"),'->', 9);
console.log(sumStr("34","5"), '->', 39);

const tekstinisSkaicius = '' + skaicius;
let skaitmenuKiekis = tekstinisSkaicius.length;

*/

function sumStr(a, b) {
  const str1 = a === '' ? 0 : parseInt(a);
  const str2 = b === '' ? 0 : parseInt(b);

  return '' + (str1 + str2);
}

console.log(sumStr("4", "5"), '->', "9");
console.log(sumStr("34", "5"), '->', "39");


// paversti teksta i skaicius
//atlikti skaiciu suma


/*}if (typeof number === 'number'  ) {
  const sum = (a + b);
  console.log(sum);  
}
*/ 

