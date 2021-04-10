const mongoose = require("mongoose");

mongoose.connect("",
 {useNewUrlParser: true, useUnifiedTopology: true},
 (err) => {
    if(!err)
        console.log("Mongodb connected");
    else 
        console.log("Connection error :" + err);
 });