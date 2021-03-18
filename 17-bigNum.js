function bigNum(list) {
    if (Array.isArray(list)){
return 'ERROR: netinkamas tipas, turi buti array';
    }

    if (list.length === 0) {
        return 'ERROR: array is empty';
    }
// input validation
if (typeof list !== 'object') {
    return 'ERROR: netinkamas tipas, turi buti array';
}
if (typeof list === null) {
    return 'ERROR: Null';
}
//logic
//list[0] tai lygina su pirmu array skaicium
let biggest = list[0];
for (let i = 1; i <list.length; i++) {
    const number = list[i];
    if (number > biggest) {
        biggest = number;
    }


}

//result
return 1;
}


console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum('pomidoras'));
console.log(bigNum([]));

