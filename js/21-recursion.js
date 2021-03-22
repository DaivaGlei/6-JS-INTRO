//- rekursija? rasti didziausia skaiciu betkoio gilumo sarase
// -kas vyriausias giminej?
// -kas turi daugiausiai giminej?

/* gimines medyje reikia rasti kiek gimineje yra nariu
*/

function memberCount(asmuo) {
   let nariuKiekis = 1;

   if(asmuo.children){
for (let i = 0; i<asmuo.children.lenght; i++) {
const child =asmuo.children[i];
console.log(child);
nariuKiekis += memberCount(child);

}
   }
    
return nariuKiekis;

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
const kiekNariu = memberCount(gimine1);
console.log(kiekNariu);

