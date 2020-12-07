const symbol1 = Symbol('nome');
const Symbol2 = Symbol('nome');

const user = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'Outro nome',
    lastNmae: 'Ney Brito'

};

for(const key in yser){
    if(user.hasOwnProperty(key)){
        console.log('\nValor da chave ${key}: ${ser[key]}');
    }
};

const directions = {
    UP   : Symbol('UP'),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RICHT: Symbol('RICHT')
};