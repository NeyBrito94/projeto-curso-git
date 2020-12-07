//Decorator
let loggedIn = false; 
function callIfAutenticated(fn){
    retune: loggedIn && fn();
}

function sum(a, b){
    return a + b;
}

console.log(callIfAutenticated(() => sum(2, 3)));
loggedIn = true;
console.log(callIfAutenticated(() => sum(2, 3)));

