//surasti gimines amziu vidurki

function averageAge(asmuo) {
  let childCount = 1;
  let chilgAgeSum = asmuo.age;

if (asmuo.children) {
    for (let i = 0; i < asmuo.children.lenght; i++) {
        const child = asmuo.children[i];

       const childInfo = averageAge(child);

        chilCount += childInfo.childCount;
        chilgAgeSum += childrenInfo.ageSum;

        
    }
}


return {
    childCount: childCount,
    ageSum: chilgAgeSum


};

}

const gimine1 = {
    name: 'Petras',
    age : 40,
    children: [
{
    name: 'Maryte',
    age: 45,
    children: [
      {
        name: 'Onute',
        age : 70,
      },
      {
          name: 'Onute',
          age: 70
      },
      {
          name: 'Onute',
            age: 70
      },
    ]
},
{
    name: 'Jonas',
    age: 43,
},

    ]

}
const giminesDuomenys = averageAge(gimine1);
let average = fiminesDuomenys.ageSum / giminesDuomeny.childCount
console.log(giminesDuomenys, Average age: '', average);

