// Initial Configurations.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const exphbs = require('express-handlebars');




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
app.use(require('./app/routes/routesViews'));



// Static files. <<SCULPTGL>>
const sculptGLPath = path.join(__dirname, '../app');
app.use(express.static(sculptGLPath));



// Set the javascrpits path with express.
const javascriptPath = path.join(__dirname, './app/views/scripts');
app.use(express.static(javascriptPath));



// Set the public folder.
// For a faster response from the 'html/hbs' files.
const publicPath = path.join(__dirname, '/app/public');
app.use(express.static(publicPath));




// -------------------------------------------------------------------------------------------------


// Export the configurations.
module.exports = app;
