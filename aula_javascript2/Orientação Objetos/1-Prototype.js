function Animal(){
    this.qtdePatas = 4;
}

const cachorro = new Animal;

console.log(cachorro.__proto__ === Animal.prototype);
//true

console.log(Animal.__proto__ === Function.prototype);
//true

function Animal(qtdePatas){
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde){
    Animal.call(this, 4);

    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);