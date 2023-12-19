const { exec } = require('child_process');

// Run the "start" command from package.json
function runStartCommand() {
  exec('npm start', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing "npm start": ${error}`);
      return;
    }
    console.log(`"npm start" executed successfully`);
    console.log(stdout);
  });
}

// Call the function to run the "start" command
runStartCommand();

// Requiring module
const express = require("express");
const fs = require("fs");
const path = require('path');

const app = express();

function authentication(req, res, next) {
	const authheader = req.headers.authorization;
	console.log(req.headers);

	if (!authheader) {
		let err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}

	const auth = new Buffer.from(authheader.split(' ')[1],
		'base64').toString().split(':');
	const user = auth[0];
	const pass = auth[1];

	if (user == 'admin' && pass == 'password') {

		// If Authorized user
		next();
	} else {
		let err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen((3000), () => {
	console.log("Server is Running ");
})
