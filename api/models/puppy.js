var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PuppySchema  = new Schema({
	
	name: String,
	owner: String,
	room: Number,
	breed: String,
	picture: String


});

module.exports = mongoose.model('Puppy', PuppySchema);