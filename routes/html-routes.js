// Dependencies
var path = require('path');

var isAuthenticated = require('../config/middleware/isAuthenticated');

// Routes
module.exports = function (app) {
    // customers route
    app.get('/customers', isAuthenticated, function (req, res) {
        res.render(path.join(__dirname, isAuthenticated, '../public/customer.html'));
    });
    // dashboard route // main.handlebars route
    app.get('/main', function (req, res) {
        res.render(path.join(__dirname, '../views/layouts/main.handlebars'));
    });
    // inventory route
    app.get('/inventory', isAuthenticated, (req, res) => {
        res.render('inventory', isAuthenticated, { title: 'Inventory' });
    });
    // login route
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    });
    // orders route
    app.get('/orders', isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, '../public/orders.html'));
    });
};