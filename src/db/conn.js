const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// const validator = require('validator');
mongoose.connect("mongodb://localhost:27017/visitersData", { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("connection sucessful...."))
    .catch((err) => console.log(err));


//     In Mongoose 6, strictQuery is equal to strict by default. However, you can override this behavior globally:
//     // Set `ctQuery` to `false`, so Mongoose doesn't strip out non-schema
// // query filter properties by default.
// // This does **not** affect `strict`.
// mongoose.set('strictQuery', false);