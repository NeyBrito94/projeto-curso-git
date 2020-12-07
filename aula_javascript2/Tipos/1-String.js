const textSize = 'texto'.length;
console.log('Quantidade de letras: ${textSize}');

const splittedText = 'Testo'.split(x);
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

const replacedText = ('Text', 'Txt');
console.log('\nSubstituição de valor:' , replacedText);

const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a ultima: ', allWithoutLastChar);

const secondToEnd = 'Textp'.slice(1);
console.log('\nValor da string da segunda letra até a ultima: ', secondToEnd);

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos);




