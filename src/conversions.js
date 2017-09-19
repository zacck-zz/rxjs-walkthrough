var Rx = require('rxjs');

const ofObz = Rx.Observable.of('foo', 'bar');

ofObz.subscribe(x => console.log('of Observer',x));

const frmObz = Rx. Observable.from([1,2,4,5]);

frmObz.subscribe(x => console.log('from Observer',x));

