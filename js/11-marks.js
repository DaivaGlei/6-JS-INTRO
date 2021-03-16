function paziniuVidurkis (vardas, pazymiai) {
   let suma = 0;

   for (let i = 0; i  < pazymiai.length; i++) {
       suma += pazymiai[i];
   }
 const average = suma / pazymiai.length;
   
    console.log(vardas);
    console.log(pazymiai);
    console.log(`${vardas}: pazymiu vidurkis yra 6`);
}

pazymiuVidurkis('Petriukas', [10, 2, 8, 4]);
pazymiuVidurkis('Maryte', [10, 8, 6, 4]);


