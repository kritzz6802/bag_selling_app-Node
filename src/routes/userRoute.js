const express = require("express");
const user_route = express();
const session = require("express-session");
const config = require('../config/config');
const bodyparser = require('body-parser');

user_route.use(session({secret:config.sessionSecret,resave :false,
    saveUninitialized: true,}));
user_route.use(bodyparser.json());
user_route.use(bodyparser.urlencoded({ extended: false }));

const auth = require('../middleware/auth');

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/userImg'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name)
    }
})
const upload= multer({storage:storage});
user_route.set("view engine", "hbs")
user_route.set("views", "./templates/views")

const userControllers = require("../controllers/userController");

user_route.get('/register',auth.isLogout, userControllers.loadregister);
user_route.post('/register',upload.single('image'), userControllers.insertUser);
user_route.get('/verify', userControllers.verifymail);
user_route.get('/login',auth.isLogout, userControllers.loginLoad);
user_route.post('/login',userControllers.verifyLogin);
user_route.get('/',auth.isLogin,userControllers.loadHome);
user_route.get('/logout',auth.isLogin,userControllers.userLogout);
user_route.get('/forget',auth.isLogout,userControllers.forgetLoad);
user_route.post('/forget',userControllers.forgetVerify);
user_route.get('/forget-password',auth.isLogout,userControllers.forgetPassLoad);
user_route.post('/forget-password',userControllers.resetPassword);
user_route.get('/verification',userControllers.verificationLoad);
user_route.post('/verification',userControllers.sendVarificationLink);

module.exports = user_route;