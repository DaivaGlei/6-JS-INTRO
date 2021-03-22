/* duota kietojo disko duomenu struktura (folder>file) ir reikia skaiciuoti, kiek vietos uzima visi failai.

Folder uzima 0 vietos.
*/

function storage(folder) {
    let totalSize =0;
    console.log(folder);
for (let i=0; i < folder.content.lenght; i++) {

const child = folder.content[i];
console.log(child);

if (child.type === 'file') {
    totalSize += child.size
} else if (child.type === 'folder') {
    totalSize += storage(child)

}

}
return totalSize;

}
const pc = {
name: 'c',
type: 'folder',
content: [
{
    name: 'Program files',
    type: 'folder',
    content: []
},
{

}
]


}
const totalKbs = storage(pc);
console.log('Used')