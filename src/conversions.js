var Rx = require('rxjs');

const ofObz = Rx.Observable.of('foo', 'bar');

ofObz.subscribe(x => console.log(x));


