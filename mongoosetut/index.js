// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mohitKart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
  //console.log("We are connected");
//});

const kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function () {
    const greeting =  "My name is " + this.name
    console.log(greeting);
  }

  const Kitten = mongoose.model('mohit', kittySchema);

  var mohit = new Kitten({ name: 'mohit' });
  var mohit2 = new Kitten({ name: 'mohit2' });

// console.log(mohit.name);
// mohit.speak();

mohit.save(function (err, mohit) {
    if (err) return console.error(err);
    mohit.speak();
  });

mohit2.save(function (err, mohit2) {
    if (err) return console.error(err);
    mohit2.speak();
  });  

Kitten.find({name:"mohit"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })