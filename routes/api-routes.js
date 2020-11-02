// const db = require('../models');
const passport = require('../config/passport-config');
const controller = require('../controllers/controller.js')

module.exports = function (app) {
    app.post('/api/login', passport.authenticate('local'), function (req, res) {
        app.locals.user = req.user.email;
        res.json(req.user);

    });


    app.get('/api/test/', async function (req, res) {
        let workorders = await controller.getAllWorkorders()
        res.json(workorders)

    })
    
    app.get('/api/test/', async function (req, res) {
        let techs = await controller.getAllTeches()
        // res.send('test working')
        res.json(techs)

    })

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
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
};