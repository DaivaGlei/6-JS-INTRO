/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

*/

//  a - array seka -> susideda skaiciai ir tekstas
//  x - value reiksme -> susideda skaiciai ir tekstas
// true - jei a yra x
// false - jei a nera x


// if ()





//Test.describe("Basic tests",_=>{
  //  Console.log(assertEquals(check([66, 101], 66), true));
    //Console.log(assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true));
 //   Console.log(assertEquals(check(['t', 'e', 's', 't'], 'e'), true));
   // Console.log(assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false));
   // })



  ///  Very simple, given a number, find its opposite.

///Examples:

//1: -1
//14: -14
//-34: 34 

// 
//function opposite(number) {
 //   if (let number <=0);
 //   return(-number);
 // } if (let number >=0);
 //  return(number);

 
//function opposite(a) {
    //if (a > 0);
   // return (-a);
   // if (a < 0);
  //  return (a);
//}

 // console.log(4);
//  console.log(-5);
 // console.log(0);
 // console.log(-3.2);

 // if (a >= b) {
  //  console.log('Pomidoras');
//} else {
 //   console.log('Bandykite kita karta');
//}

function opposite(n) {
    return -n;
  }
  
  console.log(4);
  console.log(-5);
  console.log(0);
  console.log(-3.2);

///
/*function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i <= 0; i--
    ) {
    newArray.push(arr[i]);
  }
  return newArray;
}
*/

//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript


function invert(array) {
  if (!Array.isArray(array)) {
    return 'Error';
  }
  let newArray = list[0];
  for (let i = 0; i <= array.length; i++) {
    const number = list[i];
    return -number;
  }
  {if (typeof array === 'object');
  return [];
  return newArray;
}
}
console.log(invert([1,2,3,4,5]), '->', [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), '->', [-1,2,-3,4,-5]);
console.log(invert([]), '->', []);
console.log(invert([0]), '->', [0]);



