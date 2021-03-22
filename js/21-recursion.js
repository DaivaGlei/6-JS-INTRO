//- rekursija? rasti didziausia skaiciu betkoio gilumo sarase
// -kas vyriausias giminej?
// -kas turi daugiausiai giminej?

/* gimines medyje reikia rasti kas buvo/yra vyriausias?
*/

function oldest(asmuo) {
    let biggestAge = asmuo.age;
    let childAge =0; 

    if (asmuo.children) {
        for (let i=0; i<asmuo.cildren.lenght; i++) {
const child =asmuo.children[i];
const childAge = oldest(child); //per cia nueina i gilesne saka


if (childAge > biggestAge) {
    biggestAge = childAge;
}
        }
    }
    
return biggestAge;

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
      }
    ]
},
{
    name: 'Jonas',
    age: 43,
},

    ]

}
const vyriausias = oldest(gimine1);
console.log(vyriausias);