// Dependencies
var path = require('path');
// const { is } = require('sequelize/types/lib/operators');

var isAuthenticated = require('../config/middleware/isAuthenticated');

// Routes
module.exports = function (app) {
    // customers route
    app.get('/customers', isAuthenticated, (req, res) => {
        res.render('customers', {
            title: 'Customers'
        });
    });
    // dashboard route // main.handlebars route
    // Route to index.handlebars
    app.get('/index', isAuthenticated, (req, res) => {
        res.render('index', {
            title: 'Dashboard'
        });
    });
    // inventory route
    app.get('/inventory', isAuthenticated, (req, res) => {
        res.render('inventory', {
            title: 'Inventory'
        });
        // res.send('inventory page');
    });
    // login route
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    });
    // orders route
    app.get('/orders', isAuthenticated, function (req, res) {
        res.render('orders', {
            title: 'Orders'
        });
    });
};