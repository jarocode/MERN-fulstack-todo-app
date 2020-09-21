const EventEmitter = require('events');

//create emitter class
class  MyEmitter  extends EventEmitter{};

//init object
const myEmitter  = new MyEmitter();

//Event listener
myEmitter.on('event', () => console.log('event fired!!'));

//Init event
myEmitter.emit('event');