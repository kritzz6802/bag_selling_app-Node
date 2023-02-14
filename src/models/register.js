// const mongoose = require('mongoose');
// const validator = require('validator');

// const registerSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         validate(values) {
//             if (!validator.isEmail(values)) {
//                 throw new Error("email not coorect")
//             }
//         }
//     },
//     phone: {
//         type: Number,
//         required: true,
//         validate(val) {
//             if (val.toString().length < 10 || val.toString.length > 10) {
//                 throw new Error("Mobile no. is incorrect")
//             }
//         }
//     },
//     image:{
//         type: String,
//         required: true,
//     },
//     password:{
//         type: String,
//         required: true,
//     },
//     is_admin:{
//         type: Number,
//         required: true,
//     },
//     is_varified:{
//         type: Number,
//         default:0
//     }
// })

// const UserregisterData = new mongoose.model('Registerdata', registerSchema);
// module.exports = UserregisterData;