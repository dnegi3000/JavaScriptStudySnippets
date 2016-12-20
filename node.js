var area = require('./export.js');

const EventEmitter = require('events');

console.log(require.main.filename + "------" + __filename );
console.log('Hello world' + area);

console.log(area.circlearea(4));

//=============================
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
console.log(' Before ');
myEmitter.emit('event');
console.log(' Before ');
