const db = require('../models');

module.exports = {
    getAllCustomers: async function () {
        return (await db.Customer.findAll({}))
            .map(customer => customer.dataValues)

    },
    getAllTechs: async () => {
        return (await db.Tech.findAll({}))
            .map(tech => tech.dataValues)
    },
    getAllWorkorders: async () => {
        return (await db.Workorder.findAll({
            include: [db.Tech, db.Customer]

        }))
            .map(workorders => workorders.dataValues)
    }
};


// db.Customer.findAll({})
//     .then(res => {
//         console.log('result: ', res);
//     });

console.log('controller is working: ', db.Tech);