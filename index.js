const express = require("express");
const app = express();
const cors = require("cors");
const { tourRouter } = require("./routes/tour.routes.js");
const { connection } = require("./config/db.js");
app.use(express.json());
app.use(cors());
require("dotenv").config();

app.get("/",(req,res)=>{
    res.send("Welcome to home page");
})

app.use("/tour",tourRouter);
 
app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log("Db is connected to server")
    }
    catch(e){
        console.log("Db is not connected to server","Error:",e)
    }
   
})