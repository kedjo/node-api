const express = require("express");
const app = express();
const port = 5500;
require("./models/dbConfig");
const postsRoutes = require("./routes/postsController");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

app.use(bodyParser.json());
app.use('/posts', postsRoutes);

app.listen(port, () => {
    console.log("Server is listenning on port: " + port);
})