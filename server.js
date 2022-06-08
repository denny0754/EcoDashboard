const express = require("express");
require("dotenv").config();
const winston = require("winston");
const expressWinston = require("express-winston");

// Initializing the Express App
const app = express();

// Initializing logging for the web-app
app.use(
	expressWinston.logger({
		transports: [new winston.transports.Console()],
		format: winston.format.combine(
			winston.format.colorize(),
			winston.format.cli()
		),
		meta: true,
		msg: "HTTP  ",
		expressFormat: true,
		colorize: true,
		ignoreRoute: function (req, res) {
			return false;
		},
	})
);


/*
    APP CONSTANTS
*/
const FALLBACK_APP_PORT = 8888;


/*
    Routers Initialization
*/
app.use('/', require('./routes/root/root'));
app.use('/auth', require('./routes/auth/auth'));

app.listen(process.env.APP_PORT || FALLBACK_APP_PORT, () => {
	console.log(`Listening on port ${process.env.APP_PORT || FALLBACK_APP_PORT}.`);
});
