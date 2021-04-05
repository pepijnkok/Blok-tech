const mongoose = require('mongoose');
// Using a validator to validate the email 
const validator = require('validator');

// Structure for the collection 
const Schema = mongoose.Schema;

// Source: https://mongoosejs.com/docs/guide.html
// Making a new Schema
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