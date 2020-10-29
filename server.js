// Dependencies
// =============================================================
var express = require('express');
var exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static('/public'));

// Initialize & setup handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Route to index.handlebars
// app.get('/', (req, res) => {
//     res.render('index');
// });

// Routes
// =============================================================
require('./routes/html-routes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
