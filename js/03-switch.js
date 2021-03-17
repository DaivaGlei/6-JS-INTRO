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
/*

const id = '1';

switch(id){
      case '1':
        return `(getPlanetName(1), 'Mercury');`;
  
      case '2':
        console.log(`(getPlanetName(2), 'Venus');`);

      case '3':
        console.log(`(getPlanetName(3), 'Earth');`);
        
        case '4':
            console.log(`(getPlanetName(4), 'Mars');`);

         case '5':
            console.log(`(getPlanetName(5), 'Jupiter');`);

            case '6':
                console.log(`(getPlanetName(6), 'Saturn');`);

              case '7':
                console.log(`(getPlanetName(7),'Uranus');`);

              case '8':
               console.log(`(getPlanetName(8),'Neptune');`);       
            }

            */
var planet;
        switch (new Date().getDay()) {
                case 1:
                  planet = `(getPlanetName(1), 'Mercury');`;
            break;
                case 2:
                  planet = `(getPlanetName(2), 'Venus');`;
          break;
                case 3:
                 palnet = `(getPlanetName(3), 'Earth');`;
                  break;
                  case 4:
                      planet = `(getPlanetName(4), 'Mars');`;
          break;
                   case 5:
                     planet = `(getPlanetName(5), 'Jupiter');`;
          break;
                      case 6:
                          planet = `(getPlanetName(6), 'Saturn');`;
          break;
                        case 7:
                          planet = `(getPlanetName(7),'Uranus');`;
          break;
                        case 8:
                         planet = `(getPlanetName(8),'Neptune');`;       
                      }        