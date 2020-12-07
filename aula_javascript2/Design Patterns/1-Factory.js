function Pessoar(customProperties){
    return {
        name: "Ney",
        lastName: "Brito",
        ...customProperties
    }
}

const p = Pessoas({name: 'Custom Name', age: 25});
console.log(p);