const db = require('../models');

module.exports = {
    getAllCustomers: async function () {
        return (await db.Customer.findAll({}))
            .map(customer => customer.dataValues)

    }

};


// db.Customer.findAll({})
//     .then(res => {
//         console.log('result: ', res);
//     });

console.log('controller is working: ', db.Customer);