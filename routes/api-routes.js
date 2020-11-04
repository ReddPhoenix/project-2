// const db = require('../models');
const passport = require('../config/passport-config');
const controller = require('../controllers/controller.js');
const db = require('../models');

module.exports = function (app) {
    app.post('/api/login', passport.authenticate('local'), function (req, res) {
        app.locals.user = req.user.email;
        res.json(req.user);

    });

    app.get('/api/test/', async function (req, res) {
        let workorders = await controller.getAllWorkorders()
        res.json(workorders)

    });

    app.get('/api/test2/', async function (req, res) {
        let techs = await controller.getAllTechs(3)
        // res.send('test working')
        res.json(techs)

    });

    app.get('/api/test3/', async function (req, res) {
        let countWO = await controller.getCountWorkorders()
        res.json(countWO)
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

    app.post('/api/new-customer', function (req, res) {
        console.log("inside", req.body)
        db.Customer.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        });
    });
};