// App.js
// ======
// This file serves as the main
// server startup script.

// Require dependencies
// --------------------
var express = require('express'),
    app     = express(),
    exphbs  = require('express-handlebars');


// Configuration
// -------------
app.engine('hbs', exphbs({
  defaultLayout: 'default',
  extname: '.hbs',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');



// Middleware
// ----------
app.use(express.static(__dirname + '/public')); // Serve static files
app.use(require('./controllers/home'));
app.use('/login', require('./controllers/login'));


// Start the server
// ----------------
var server = app.listen(9000, function() {
  console.log('App is running at http://localhost:' + server.address().port);
});
