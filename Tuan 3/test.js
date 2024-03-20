console.log(1)
//var events = require("events");
var emitter = new events.EventEmitter();
var author = "Slim Shady";
var title = "The real Slim Shady";

//an event listener
emitter.once("addAuthorTitle", function(author, title) {
  console.log("Added Author and Title " + author + " - " + title);
});
//add record to db
// then emit an event
emitter.emit("addAuthorTitle", author, title);
emitter.emit("addAuthorTitle", author, title);