const db = require('../models');

module.exports = {
    getAllCustomers: async function () {
        try {
            return (await db.Customer.findAll({}))
                .map(customer => customer.dataValues)
        }
        catch (err) { console.error(err) }
    },
    // If count is negative get All Techs
    getAllTechs: async (count) => {
        try {
            return (await db.Tech.findAll(count > 0 ? { limit: count } : {}))
                .map(tech => tech.dataValues)
        }
        catch (err) { console.error(err) }
    },
    getAllWorkorders: async () => {
        try {
            let orders = (await db.Workorder.findAll({
                // raw: true,
                include: [db.Tech, db.Customer]

            }))
                .map(workorders => {
                    // console.log(workorders.appt_date)
                    // console.log(new Date(workorders.appt_date).toDateString())
                    if (workorders.dataValues.Tech) {
                        workorders.dataValues.Tech = workorders.dataValues.Tech.dataValues
                        workorders.dataValues.Customer = workorders.dataValues.Customer.dataValues
                    }
                    // workorders.dataValues.Tech = workorders.dataValues.Tech.dataValues
                    else {
                        workorders.dataValues.Customer = workorders.dataValues.Customer.dataValues
                    }
                    // workorders.appt_date = new Date(workorders.app_date).toDateString()
                    if (workorders.dataValues.appt_date) { workorders.dataValues.appt_date = new Date(workorders.dataValues.appt_date).toLocaleString() } else { null }
                    console.log(workorders.dataValues.appt_date)
                    return workorders.dataValues

                })
            return orders
        }
        catch (err) { console.error(err) }
    },
    getCountWorkorders: async () => {
        try {
            let countWO = (await db.Workorder.count())
            return countWO
        }
        catch (err) { console.error(err) }
    }

    // Create New Customer Query
    // insertCustomer: async()=>{
    //     let new =(await db.Customer.create(req.body))
    // },
};

console.log('controller is working: ', db.Workorder);