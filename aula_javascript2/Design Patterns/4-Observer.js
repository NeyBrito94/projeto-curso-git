/*
class Observable{
    constructor(){
        this.observables = []

    }
}

subscribe(fn) {
    this.observables.push(fn);
}

notify(data){
    this.observables.forEach(fn => fn (data));      
}

unsubscribe(fn){
    this.observables = this.observables.filter(obs => obs !== fn);
}

const o = new Observable();
const logData1 = data => Console.log('Subscribe 1: ${data}');
const logData2 = data => Console.log('Subscribe 3: ${data}');
const logData3 = data => Console.log('Subscribe 3: ${data}');

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('Notified 1');

o.subscribe(logData2);
o.notify('Notified 2');
*/