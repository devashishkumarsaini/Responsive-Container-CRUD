const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require("dotenv").config();
const empRoutes=require("./route/employee")


//database connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
.then(()=>{
    console.log("DATABASE CONNECTED")
})
.catch((err)=>{
    console.log("DATABASE CONNECTION FAILED");
    console.log(err);
})

//using middlewares
app.use(bodyParser.json());
app.use(cors());

//using routes
app.use("/api",empRoutes);

//defining port
const port=process.env.PORT || 8000;

//listning to the port
app.listen(port,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${port}`);
})