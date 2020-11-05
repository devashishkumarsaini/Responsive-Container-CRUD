const express=require('express');
const router=express.Router();

const {registerEmployee,updateEmployee,getEmployee,getAllEmployee} =require('../controller/employee')


//defining route
router.post("/register",registerEmployee);
router.put("/update",updateEmployee);
router.get("/getEmployee",getEmployee);
router.get("/getAllEmployee",getAllEmployee);

module.exports=router;