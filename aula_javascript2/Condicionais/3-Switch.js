//Switch Case

const fruit = 'banana';

switch(fruit){
    case 'banana':
        console.log('R$3,90 / kg');
        break;
    case 'mamão':
    case 'manga':
    case 'maça':
            console.log('R$2,90 / kg');
            break;
    
    case 'pêra':
            console.log('R$1,40 / kg');
            break;
    default:
        console.log('Produto não encontrado.');
        break;
}