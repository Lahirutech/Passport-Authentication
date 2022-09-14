const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const employeeRoutes=require("./routes/employee-router")

const mongooseServer = require("mongoose")
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5001;

app.use(cors());  
app.use(bodyparser.urlencoded({ extended : true}))
app.use(express.json());

app.use("/api/employee",employeeRoutes)


mongooseServer
    .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    }) 
    .then(() => console.log("db Connected"));

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`); 
});
