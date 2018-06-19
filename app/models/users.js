var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
  name: String,
  author: String
});

module.exports = mongoose.model('myUsers', TestSchema);
