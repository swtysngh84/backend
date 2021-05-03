const  mongoose = require('mongoose');

exports.Employee = mongoose.model('employee',{
    name:{
        type:String,
        required: true,
        minlength: 1,
        trim: true
    },
    gender:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type: Date,
    },
    pic:{
        type:String,
        required: true,
    }

});

// module.exports={ Employee };
