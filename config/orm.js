const connection = require('../config/connection.js');

const orm = {
    all: (tableInput, cb) => {
        const queryString = 'SELECT * FROM ?? ORDER BY id';
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

// ***Export the orm object
module.exports = orm;