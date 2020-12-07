//Array
const arr = [1, 2, 3];

//Instanciar um array
const arr2 = new Array[4, 5, 6, 7];

const persons = new Array.of['ney', 'diogo', 'Rafa'];

//Parametro Array
const arr = Array(3);

const arr2 = Array(3, 2);

const divs = document.querySelectorAll('div');
const numeros = new Array.from(divs);

//push adiciona um ou mais elementos no final do array
arr2.push(5);

//pop remover o ultimo elemento
arr2.pop();

//unshft adiciona no inicio do array
arr2.unshift(0);

//shift remove no inicio
arr2.shift();

//concat concatena dois arrays
const numeros2 = arr.concat(arr);

//slice retorna um novo array 'fatiando' de acordo com inicio e fim denominado
arr2.slice(0.2); //retorna arr2 = [4,5]
arr2.slice(2);   //retorna arr2 = [6,7]
arr2.slice(-1);  //retorna arr2 = [7]
arr2.slice(-3);  //retorna arr2 = [5,6,7]

//splice altera o array tirando elementos antigos com novos elementos
arr2.splice(0,0, 'first'); //Retorno arr2 = ['first',5 ,6 , 7] 

//forEach iteração com cada item dentro do array
arr2.forEach((value, index)=> {
    console.log(`${index}: ${value}`); //retorno 0"4" 1"5" 2"6" 3"7"
});

//map retona um novo array do mesmo tamanho iterando cara item
arr2.map(value => value * 2); //Retorno [8, 10, 12, 14];

//flat retona novo array com sub elementos concatenados
arr2.flat();

//flatMap
arr2.flatMap(value => [value *2]);

//key retorna um array iterator que contes chaves para cada elemento de array
const arrIterator = arr.keys();

//Values retorna os valores
const arrIterator = arr2.values();

//Entries pares chave/valor
const arrIterator = arr.values();

//find Retorna o primeiro item que satisfaz uma condição
const firtGreaterThanTwo = arr2.find(value => value > 2);

//findindex indice de um item que satisfaz uma condição
const firtGreaterThanTwo = arr2.findIndex(value => value > 2);

//filter retorna todos os elementos que entra numa condição num novo array
const firtGreaterThanTwo = arr2.filter(value => value > 2);

//indexOf retorna primeiro indice que pode ser encontrado num array
const firstIndexOfItem = arr2.indexOf(3);

//lastIndexOf ultimo item
const firstIndexOfItem = arr2.lastIndexOf(3);

//includes verifica se determinado item está dentro do array
const hasItemOne = arr2.include(1); //false

//some verifica se algum item entra numa condição
const hasSomeEvenNumber = arr2.some(value => value % 2 == 0);

//every verificar se todos item satisfaz uma condição
const allEvenNumbers = arr2.every(value => value % 2 == 0); //false

//sort Ordena elementos do array
arr2.sort();

//reverse inverte o sentido array
arr2.reverse();

//join junta os elementos do array por um delimintador separando por uma string
arr2.join('-');

//reduce retorna novo tipo de dado iterando
arr2.reduce((total, value) => total += value, 0);



