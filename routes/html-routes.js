// Dependencies
var path = require('path');
const controller = require('../controllers/controller.js')
// const { is } = require('sequelize/types/lib/operators');

var isAuthenticated = require('../config/middleware/isAuthenticated');

// Routes
module.exports = function (app) {
    // customers route
    app.get('/customers',
        // isAuthenticated,
        async (req, res) => {
            let customers = await controller.getAllCustomers()
            res.render('customers', {
                customers: customers,
                title: 'Customers'
            });
        });

    // technicians route
    app.get('/techs',
        // isAuthenticated,
        async (req, res) => {
            let techs = await controller.getAllTechs()
            // console.dir(techs)
            res.render('techs', {
                techs: techs,
                title: 'Technicians'
            });
        });

    app.get('/orders',
        // isAuthenticated,
        async (req, res) => {
            let orders = await controller.getAllWorkorders()
            // console.dir(workorders)
            // console.log(orders)
            res.render('orders', {
                workorders: orders
            });
        });

    // dashboard route // main.handlebars route
    // Route to index.handlebars
    app.get('/index',
        // isAuthenticated,
        async (req, res) => {
            let techs = await controller.getAllTechs(3)
            let countWO = await controller.getCountWorkorders()
            res.render('index', {
                title: 'Dashboard',
                techs: techs,
                countWO: countWO
            });
        });
    // inventory route
    app.get('/inventory',
        // isAuthenticated,
        (req, res) => {
            res.render('inventory', {
                title: 'Inventory'
            });
            // res.send('inventory page');
        });
    // res.send('inventory page');

    // new customer route
    app.get('/new-customer',
        // isAuthenticated, 
        (req, res) => {
            res.render('new-customer', {
                title: 'New Customer'
            });
            // res.send('inventory page');
        });
    // login route
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    });

};