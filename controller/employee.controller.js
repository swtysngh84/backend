const { Employee } = require('../models/employee.model')

exports.createEmployee = (done) => {
    const small = new Employee({name:'test',});
    small.save(function (err,data) {
        if (err) return done(err);
        done(null, data)
    });
}

exports.getEmployee = (done) => {
    // const small = new Employee({name:'test',});
     Employee.find(function (err,data) {
        if (err) return done(err);
        done(null, data)
    });
}