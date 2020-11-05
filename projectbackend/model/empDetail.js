const mongoose=require('mongoose');

const EmployeeSchema=new mongoose.Schema({
    empId:{
        type:Number,
        required:true,
        maxlength:10,
        trim:true,
        unique:true
    },
    empName:{
        type:String,
        required:true,
        maxlength:35,
        trim:true
    },
    empSalary:{
        type:Number,
        required:true,
        maxlength:10,
        trim:true
    }
})

module.exports=mongoose.model("Employee",EmployeeSchema);