/* absdef -> fedcba */

const text = 'abcdef';
let reverse = '';

for (let i = text.length; i > 0; i--) {
console.log(i, text[i - 1]);
reverse += text[i - 1];
}

console.log(text, '->', reverse);

for (let i = 0; i < text.length; i++) {
    reverse += text[text.length - 1 -i];
    }
    
    for (let i = 0; i < text.length; i++) {
        reverse = text[i] + reverse;
            }


  const text1 = 'labas';
  let reverse1 ='';
  
  for (let i = text1.length; i > 0; i--) {
      console.log(i, text1[i - 1]);
      reverse =+ text1[i - 1];
  }