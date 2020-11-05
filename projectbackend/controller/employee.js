const Employee =require('../model/empDetail')


//register method
exports.registerEmployee=(req,res)=>{
    const employee=new Employee(req.body);
    employee.save((err,emp)=>{
        if(err || !emp){
            return res.status(400).json({
                error:"Error! Please try again."
            })
        }
        return res.json({
            error:"Register Successfully"
        })
    })
}

exports.updateEmployee=(req,res)=>{
    console.log(req.body)
    Employee.findOneAndUpdate(
        {empId:req.body.empId},
        {$set:req.body},
        { new: true, useFindAndModify: false },
        (err,emp)=>{
            if(err || !emp){
                return res.status(400).json({
                    error:"Error in Updating"
                })
            }
            return res.json({
                message:"Updated Sucessfully"
            })
        }
    )
}

exports.getEmployee=(req,res)=>{
    Employee.findOne({empId:req.body.empId}).exec((err,emp)=>{
        if(err){
            return res.status(400).json({
                error:"Can't find Employee"
            })
        }
        return res.json(emp)
    })
}

exports.getAllEmployee=(req,res)=>{
    Employee.find().exec((err,emp)=>{
        if(err){
            return res.status(400).json({
                error:"Can't find Employee"
            })
        }
        return res.json(emp)
    })
}