const myNumber = 12.4032;

const numberAsString = myNumber.toString();
console.log("Numero transformado em string: ", numberAsString);

const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNumero com duas casas decimais: ', fixedTwoDecimals);

console.log('\nString parseada par float: ', parseFloat('12.22'));

console.log('\nString parseada para int: ', parseInt('13.20'));

