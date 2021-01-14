/*
    [EXPRESS] USED FOR THE SERVER
    [PATH] TO CONCATENATE DIRECTORIES
    [BODY PARSER] FOR
    [EXPHBS] FOR LAYOUTS
    [MORGAN] FOR INFO IN THE SERVER SIDE
*/


// Initial Configurations.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const morgan = require('morgan');


// Server initialization.
const app = express();

// Settings.
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, './app/views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');


// Middleware. 
// EXTENDED: TRUE (Supports JSON data).
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.use(morgan('dev'));


// Routes.
app.use(require('./routes'));


// Static files.
const javascriptPath = path.join(__dirname, './app/scripts');
const publicPath = path.join(__dirname, '/app/public');

app.use(express.static(javascriptPath));
app.use(express.static(publicPath));


// ----------------------------------------------------

// Export the configurations.
module.exports = app;