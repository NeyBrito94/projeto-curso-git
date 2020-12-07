function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn = () => {
    return 'Code Here'
}

console.log(fn());
console.log(fn.prop);

const logValue = value => console.log(value);
const lofFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

const controlFnExec => fnParam => allowed =>{
    if(allowed){
        fnParam();
    }
}

this.nome = 'Nome no contexto de criação';

function getName(){
    return this.name;
}

const user = {
    name: 'Nome do objeto de execção',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());

