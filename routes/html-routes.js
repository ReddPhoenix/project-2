// Dependencies
var path = require(path);

// Routes
module.exports = function (app) {
    // customers route
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/customer.html'))
    });
    // dashboard route
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/dashboard.html'))
    });
    // inventory route
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/inventory.html'))
    });
    // login route
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/login.html'))
    });

};