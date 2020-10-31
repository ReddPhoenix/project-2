// Dependencies
var path = require('path');

// Routes
module.exports = function (app) {
    // customers route
    app.get('/customers', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/customer.html'));
    });
    // dashboard route // main.handlebars route
    app.get('/main', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/layouts/main.handlebars'));
    });
    // inventory route
    // app.get('/inventory', function (req, res) {
    //     res.sendFile(path.join(__dirname, '../views/layouts/inventory.handlebars'));
    // });
    // login route
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    });
    // orders route
    app.get('/orders', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/orders.html'));
    });
};