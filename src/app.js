require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

const cfileRoutes = require("./routes/cfiles");
const app = express();

const dbUrl = process.env.DB_URL || "mongodb://localhost/clinic-workflow"

mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useUnifiedTopology', true);
mongoose.connect(dbUrl, {useNewUrlParser: true})
.then(() => {
    console.log('Connected to Mongo Database succesfully')
})
.catch(() => {
    console.log("FAILED TO CONNECT!!");
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
//     next();
// });

app.get("/", function(req, res) {
    res.send("working");
});

app.use("/api/cfiles", cfileRoutes)

module.exports = app;
