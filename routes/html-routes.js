// Dependencies
const path = require('path');
const controller = require('../controllers/controller.js');
const isAuthenticated = require('../config/middleware/isAuthenticated');

// Routes
module.exports = function (app) {
    // customers route
    app.get('/customers',
        isAuthenticated,
        async (req, res) => {
            let customers = await controller.getAllCustomers()
            res.render('customers', {
                customers: customers,
                title: 'Customers'
            });
        });

    // technicians route
    app.get('/techs',
        isAuthenticated,
        async (req, res) => {
            let techs = await controller.getAllTechs()
            res.render('techs', {
                techs: techs,
                title: 'Technicians'
            });
        });

    // Get workorders and count them
    app.get('/orders',
        isAuthenticated,
        async (req, res) => {
            let orders = await controller.getAllWorkorders()
            let countWO = await controller.getCountWorkorders()
            res.render('orders', {
                workorders: orders,
                countWO: countWO
            });
        });

    // Route to index.handlebars // dashboard route
    app.get('/index',
        isAuthenticated,
        async (req, res) => {
            let techs = await controller.getAllTechs(3)
            let countWO = await controller.getCountWorkorders()
            let countWoP = await controller.getCountWoPend()
            let countWoA = await controller.getCountWoAsd()
            let countWoC = await controller.getCountWoCom()
            let countWoN = await controller.getCountWoNI()
            let countWoS = await controller.getCountWoSC()
            let countWoT = await controller.getCountWoTC()

            res.render('index', {
                title: 'Dashboard',
                techs: techs,
                countWO: countWO,
                countWoP: countWoP,
                countWoA: countWoA,
                countWoC: countWoC,
                countWoN: countWoN,
                countWoS: countWoS,
                countWoT: countWoT
            });
        });

    // inventory route
    app.get('/inventory',
        isAuthenticated,
        (req, res) => {
            res.render('inventory', {
                title: 'Inventory'
            });
        });

    // new customer route
    app.get('/new-customer',
        isAuthenticated,
        (req, res) => {
            res.render('new-customer', {
                title: 'New Customer'
            });
        });

    // login route
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    });
};