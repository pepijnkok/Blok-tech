# Traveldate, matching app for adventurous travelers
![screencapture-file-Users-pepijn-Documents-CMD-Jaar-2-Blok-3-Project-Tech-website-index-html-2020-03-20-00_42_29](https://user-images.githubusercontent.com/59015908/77124692-db21cd00-6a43-11ea-8988-8142e1309f9f.png)


## Table of Content
- Description
- Database
- Install
- Database visualisation
- Packages
- Wiki
- License

## Description
This is my matching app I made for Project tech. This is a project for my study Communication and Multimedia Design at the Amsterdam University of Applied Sciences
Travelbuddy is a matching app that has a focus on people who like to travel and are adventurous.
People can find their own travelbuddy with the same interest and go on a journey together.

## Database
I use Mongoose with the MongoDB Compass app.

## Install
1. Open the terminal

2. Clone the repository
```
git clone https://github.com/pepijnkok/blok-tech
```
 
3. Go to the cloned repository repository
```
cd /blok-tech
```

4. Make an .env file
```
touch .env
```

5. Install the packages
```
npm install
```

6. Start the application
```
node server.js
```

7. Open the server on localhost:3000
![localhost](https://user-images.githubusercontent.com/59015908/110480206-88bf3d80-80e6-11eb-9522-59f1a7134051.png)

## Database visualisation
This is the datamodel that I use for my database.

```javascript
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
```

## Packages
These are the packages that I used in this project

- Express https://expressjs.com

- EJS  https://www.npmjs.com/package/ejs

- Body Parser https://www.npmjs.com/package/body-parser

- Mongoose https://www.npmjs.com/package/mongoose

- Mongoose Validator https://www.npmjs.com/package/mongoose-validator

- dotenv https://www.npmjs.com/package/dotenv

## Wiki
Ik heb de volgende wiki aangemaakt waarin al mijn bevinden en onderzoek staan van dit project
https://github.com/pepijnkok/Blok-Tech/wiki

## License
[MIT License](https://github.com/pepijnkok/blok-tech/blob/master/LICENSE.md) © [Pepijn Kok](https://github.com/pepijnkok)
