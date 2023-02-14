const mongoose = require('mongoose');
const validator = require('validator');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true
        // unique: true,
        // validate(values) {
        //     if (!validator.isEmail(values)) {
        //         throw new Error("email not coorect")
        //     }
        // }
    },
    phone: {
        type: Number,
        required: true,
        // validate(val) {
        //     if (val.toString().length < 10 || val.toString.length > 10) {
        //         throw new Error("Mobile no. is incorrect")
        //     }
        // }
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    date:{
        type:Date,
        default: new Date()
    }
})

const UserData = new mongoose.model('Register', usersSchema);
module.exports = UserData;