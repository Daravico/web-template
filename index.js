// Brings the server configurations.
const app = require('./server.js');

// Start the server.
app.listen(app.get('port'), ()=> {
    console.log('S E R V E R   I N   P O R T : ', app.get('port'));
});