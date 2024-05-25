// NOTE: importing http or os imports the OBJECT of http and os
// but  require(events) imports and EventEmitter CLASS and not OBJECT

const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// On this emitter object we can listen to an event and we can FIRE an event also.

// EVENT LISTNER

// attention is my OWN EVENT (I created that)

emitter.on("attention", (data) => {
  console.log("okay in the attention postion", data);
});

// MESSAGE SENDER:
// It emits the event with some data

emitter.emit("attention", 99);
