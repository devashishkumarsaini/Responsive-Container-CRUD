import React, { Component } from 'react'
import { Resizable } from "re-resizable";
import { registerAPI } from "../apicall";
export default class Insert extends Component {
    constructor(props){
        super(props);
        this.state={
            height:300,
            width:550,
            empId:'',
            empName:'',
            empSalary:null,
            error:false,
            success:false
        }
    }

    registerEmployee=(event)=>{
      event.preventDefault();
      registerAPI({empId:this.state.empId,empName:this.state.empName,empSalary:this.state.empSalary})
      .then(data=>{
        this.setState({
          success:true,error:false
        })
      })
      .catch(err=>{
        alert(err)
        this.setState({
          error:err,success:false
        })
      })
    }

    render() {
        const check=this.state.empId==='' || this.state.empName==='' || this.state.empSalary===null;
        return (
            <Resizable
              className="card insert bg-warning"
              size={{ width: this.state.width, height: this.state.height }}
              onResizeStop={(e, direction, ref, d) => {
                this.setState({
                  
                  width: this.state.width + d.width,
                  height: this.state.height + d.height,
                });
              }}
            >
              <h5>New Employee</h5>
              {
                this.state.success &&
                <div class="alert alert-dark  alert-dismissible fade show mt-4" role="alert">
                  <h4 class="alert-heading">Details Updated Succesfully!</h4>
                  <button className="btn btn-dark" onClick={()=>this.setState({success:false})}>Register More</button>
                </div>
              }
              {(this.state.success===true) ? '' : 
                <form onSubmit={this.registerEmployee}>
                <div class="form-group mt-2">
                  <input type="number" class="form-control" value={this.state.empId} onChange={(event)=>this.setState({empId: event.target.value})} placeholder="Employee Id"/>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" value={this.state.empName} onChange={(event)=>this.setState({empName: event.target.value})} placeholder="Employee Name"/>
                </div>
                <div class="form-group">
                  <input type="number" class="form-control" value={this.state.empSalary} onChange={(event)=>this.setState({empSalary: event.target.value})} placeholder="Employee Salary"/>
                </div>
                <button type="submit" disabled={check} class="btn btn-dark text-white">Register</button>
              </form>}
              
              {
                this.state.error &&
                <div class="alert alert-dark mt-4" role="alert">
                  <h4 class="alert-heading">ERROR</h4>
                </div>
              }
            </Resizable>
        )
    }
}
