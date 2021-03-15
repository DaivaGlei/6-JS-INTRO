const animal = 'dog';

switch (animal) {
    case 'dog':
        console.log('Bark bark');
        break;

    case 'cat':
        console.log('Meow meow');
        break;

    default:
        console.log('Unknow animal');
        break;
}

console.log('---------------');

const day = 1;

switch (day) {
    case 1:
        console.log('pirm');
        break;
    case 2:
        console.log('antr');
        break;
    default:
        console.log('Tokia diena savaiteje neegzistuoja');  
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
}