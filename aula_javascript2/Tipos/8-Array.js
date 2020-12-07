const user = ['Guilherme', 'Pedro'];



const gender={
    MAN:  Symbol('M'),
    WOMAN:Symbol('W') 
}

const persons = [
    {
        name:   'Ney',
        age:    26,
        gender: gender.MAN
    },
    {
        name:   'Guilherme',
        age:    17,
        gender: gender.MAN
    },
    {
        name:   'Rafaela',
        age:    20,
        gender: gender.WOMAN
    } 
    
]

console.log('Itens ', persons.length);

console.log('A variavel persons é um array: ', Array.isArray(persons));

persons.forEach(persons=> {
    console.log('Nome; ${person.name)');
});

const mens = persons.filter(person => person.gender == gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    
})

const totalAge = persons.reduce((age, person)=>{
    age+=person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

const totalEvenAges = pesons
                        .filter(person => person.age%2 ==0)
                        .reduce((age,person) => {
                          age+= person.age;
                          return age;
                        }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par ', totalEvenAges);

