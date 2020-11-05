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
                include: [db.Tech, db.Customer]

            }))
                .map(workorders => {
                    // if Tech is not null return both Tech and Customer
                    if (workorders.dataValues.Tech) {
                        workorders.dataValues.Tech = workorders.dataValues.Tech.dataValues
                        workorders.dataValues.Customer = workorders.dataValues.Customer.dataValues
                    }
                    // else just return Customer
                    else {
                        workorders.dataValues.Customer = workorders.dataValues.Customer.dataValues
                    }
                    // reformats date
                    if (workorders.dataValues.appt_date) {
                        workorders.dataValues.appt_date = new Date(workorders.dataValues.appt_date).toLocaleString()
                    }
                    else {
                        null
                    }
                    if (workorders.dataValues.status === 'Pending') {
                        workorders.dataValues.scolor = 'is-warning'
                    }
                    else if (workorders.dataValues.status === 'Assigned') {
                        workorders.dataValues.scolor = 'is-link'
                    }
                    else if (workorders.dataValues.status === 'Complete') {
                        workorders.dataValues.scolor = 'is-success'
                    }
                    else {
                        null
                    }
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
    },
    getCountWoPend: async () => {
        try {
            let countWoP = (await db.Workorder.count({
                where: {
                    status: 'Pending'
                }
            }))
            return countWoP
        }
        catch (err) { console.error(err) }
    },
    getCountWoAsd: async () => {
        try {
            let countWoA = (await db.Workorder.count({
                where: {
                    status: 'Assigned'
                }
            }))
            return countWoA
        }
        catch (err) { console.error(err) }
    },
    getCountWoCom: async () => {
        try {
            let countWoC = (await db.Workorder.count({
                where: {
                    status: 'Complete'
                }
            }))
            return countWoC
        }
        catch (err) { console.error(err) }
    },
    getCountWoNI: async () => {
        try {
            let countWoN = (await db.Workorder.count({
                where: {
                    reason: 'New Install'
                }
            }))
            return countWoN
        }
        catch (err) { console.error(err) }
    },
    getCountWoSC: async () => {
        try {
            let countWoS = (await db.Workorder.count({
                where: {
                    reason: 'Service Call'
                }
            }))
            return countWoS
        }
        catch (err) { console.error(err) }
    },
    getCountWoTC: async () => {
        try {
            let countWoT = (await db.Workorder.count({
                where: {
                    reason: 'Service Call'
                }
            }))
            return countWoT
        }
        catch (err) { console.error(err) }
    }

    // Create New Customer Query
    // insertCustomer: async()=>{
    //     let new =(await db.Customer.create(req.body))
    // },
};

console.log('controller is working: ', db.Workorder);