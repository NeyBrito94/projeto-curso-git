//Else if

const array = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('\nelsse if');

array.forEach(item => {
    if(item % 2 == 0){
        console.log('O número ${item} é par.');
    }else if(item % 3 == 0) {
        console.log('O número ${item} é divisivel por 3.')
    }else if(item % 5 == 0) {
        console.log('O número ${item} é divisivel por 5.')
    }
});

//Se quiser que caia em mais de uma condição usa if
array.forEach(item => {
    if(item % 2 == 0){
        console.log('O número ${item} é par.');
    }if(item % 3 == 0) {
        console.log('O número ${item} é divisivel por 3.')
    }if(item % 5 == 0) {
        console.log('O número ${item} é divisivel por 5.')
    }
});