var mongoose = require('mongoose');

module.exports = function(config){

  // var messageSchema = mongoose.Schema({message:String});
// var Message = mongoose.model('Message',messageSchema);
// var mongoMessage;
//
  //db = mongoose.connection
  mongoose.connect(config.db,config.msgEnv);
  var db = mongoose.connection;
  db.on('error',console.error.bind(console,'connection error ...'));
  db.once('open',function callback(){
    console.log( msgEnv +' is opened');
  });

};