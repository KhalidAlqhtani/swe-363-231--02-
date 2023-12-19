const EventEmitter = require('events');
class eventEmitter extends EventEmitter {}
const emitter = new eventEmitter();
module.exports = emitter;