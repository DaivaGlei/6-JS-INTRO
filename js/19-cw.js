/*

function myFunction(a) {
    var a = 123.toString(a);
    return a;
}

console.log(myFunction(a, '123', 'Wrong!'));
*/

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript//

/*function abbrevName(name){


    // code away

}

console.log(abbrevName("Sam Harris"), '->', "S.H");
console.log(abbrevName("Patrick Feenan"), '->', "P.F");
console.log(abbrevName("Patrick Feenan"), '->', "P.F");
console.log(abbrevName("Patrick Feenan"), '->', "P.F");
console.log(abbrevName("Evan Cole"), '->', "E.C");
console.log(abbrevName("P Favuzzi"), '->', "P.F");
console.log(abbrevName("David Mendieta"), '->', "D.M");

*/
//https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript


//

//function differenceInAges(ages){
    const forLoopMinMax = () => {
    let min = array[0], max = array [0]

    for (let i = 1; i < array.length; i++) {
        let value = array[i]
        min = (value < min) ? value : min
        max = (value > max) ? value : max
    }
 return [min, max]

}

console.log(forLoopMinMax([82, 15, 6, 38, 35]), '->', [6, 82, 76]);
console.log(forLoopMinMax([57, 99, 14, 32]), '->', [14, 99, 85]);