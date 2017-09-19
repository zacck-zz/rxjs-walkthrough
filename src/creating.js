const Rx = require('rxjs')
//observable depending on exernal events
const externalEvents = new Rx.Subject();

externalEvents.subscribe(x =>  console.log('external event posted this', x));

externalEvents.next('Some message from the ethers');
