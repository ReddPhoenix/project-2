const db = require('../models');

module.exports = {
    getAllCustomers: async function () {
        return (await db.Customer.findAll({}))
            .map(customer => customer.dataValues)

    },
    // If count is negative get All Techs
    getAllTechs: async (count) => {
        return (await db.Tech.findAll(count > 0 ? { limit: count } : {}))
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
    },
    getCountWorkorders: async () => {
        let countWO = (await db.Workorder.count())
        return countWO
    }

    // Create New Customer Query
    // insertCustomer: async()=>{
    //     let new =(await db.Customer.create(req.body))
    // },
};

console.log('controller is working: ', db.Tech);