const passport = require('../config/passport-config');
const db = require('../models');

module.exports = function (app) {
    // Route for login screen
    app.post('/api/login', passport.authenticate('local'), function (req, res) {
        app.locals.user = req.user.email;
        res.json(req.user);
    });

    // Route for logging user out
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    // Route for getting some data about our user to be used client side
    app.get('/api/user_data', function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    // Route for creating a new customer
    app.post('/api/new-customer', function (req, res) {
        db.Customer.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });
};