const express = require("express");
require('./db/conn');
const hbs = require('hbs');
const path = require('path');
const UserData = require('./models/schema')
const app = express();
const port = process.env.PORT || 5000;
const userRoute = require('../src/routes/userRoute');
const { get } = require("http");

const static_path = path.join(path.join(__dirname, "../public"))
const templetes_path = path.join(path.join(__dirname, "../templates/views"))
const partialas_path = path.join(path.join(__dirname, "../templates/partials"))

app.set("view engine", "hbs")
// app.set("view engine", "hbs")
app.set("views", templetes_path);
hbs.registerPartials(partialas_path);
app.use(express.static(static_path));
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/',userRoute)
//routing
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.post("/contact", async (req, res) => {
    try {

        const registeruser = new UserData(req.body)
        await registeruser.save();

        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error)
    }
})
// app.get('/register',async(req,res)=>{
// try {
//     res.status(201).render("register")
// } catch (error) {
//     res.status(500).send(error)
// }
// })
app.listen(port, () => {
    console.log(`server running at ${port}`);
})

//30:03
