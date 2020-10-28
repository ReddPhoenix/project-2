const orm = require('../config/orm.js');

const taskably = {
    all: (cb) => {
        orm.selectAll('taskably', (res) => {
            cb(res);
        });
    },
};

// Export the database functions for the controller
module.exports = taskably;