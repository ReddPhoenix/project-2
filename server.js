// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('./config/passport-config');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./models');

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static(__dirname + '/public'));

// Initialize & setup handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Starts the server to begin listening
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
        require('./controllers/controller.js');
    });
});