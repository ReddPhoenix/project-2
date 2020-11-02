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
        let orders = (await db.Workorder.findAll({
            include: [db.Tech, db.Customer]

        }))
            .map(workorders => {
                workorders.dataValues.Tech = workorders.dataValues.Tech.dataValues
                workorders.dataValues.Customer = workorders.dataValues.Customer.dataValues
                return workorders.dataValues

            })
        return orders
    }
};


// db.Customer.findAll({})
//     .then(res => {
//         console.log('result: ', res);
//     });

console.log('controller is working: ', db.Tech);