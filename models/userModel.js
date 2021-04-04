const mongoose = require('mongoose');
const validator = require('validator');

// Structure in the collection 
const Schema = mongoose.Schema;

// https://mongoosejs.com/docs/guide.html
// Schema structure how to save in the collection
// Objects with a string and all are required
const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
        
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		validate: (value) => {
			return validator.isEmail(value);
		}   
	},
	password: {
		type: String,
		required: true,
		unique: true
	}
});

// Mongoose model, Find info, based on the Schema
// Export to app.js usage
const User = mongoose.model('User', userSchema, 'user');

module.exports = User;