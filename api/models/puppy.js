var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PuppySchema  = new Schema({
	
	name: String,
	owner: String,
	room: Number,
	breed: String,
	picture: String


});

PuppySchema.methods.bark = function bark() {
	return 'My owner is ' + this.owner
}

module.exports = mongoose.model('Puppy', PuppySchema);