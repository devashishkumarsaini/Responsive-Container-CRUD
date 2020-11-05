import React, { Component } from 'react';
import { Resizable } from "re-resizable";
export default class Update extends Component {
    constructor(props){
        super(props);
        this.state={
            height:300,
            width:550,
            empId:'',
            searchEmployee:true,
            updateEmployee:false,
            empName:'',
            empSalary:null
        }
    }

    updateEmployee=()=>{

    }

    searchEmployee=(event)=>{
      event.preventDefault();
      if(this.state.empId===''){
        alert("Enter valid ID")
      }
    }

    render() {
      const check=this.state.empId==='' || this.state.empName==='' || this.state.empSalary===null;
        return (
            <Resizable
              className="card update bg-warning"
              size={{ width: this.state.width, height: this.state.height }}
              onResizeStop={(e, direction, ref, d) => {
                this.setState({
                  width: this.state.width + d.width,
                  height: this.state.height + d.height,
                });
              }}
            >
              <form onSubmit={this.searchEmployee}>
                <div class="form-group">
                  <label for="exampleFormControlInput1"><h5>Search Person</h5></label>
                  <input type="number" class="form-control" value={this.state.empId} onChange={(event)=>this.setState({empId: event.target.value})} placeholder="Employee Id"/>
                </div>
                <button type="submit" class="btn btn-dark text-white">Search</button>
              </form>
              {
                this.state.searchEmployee &&
                <form onSubmit={this.updateEmployee}>
                  <div class="form-group row mt-4">
                    <div class="col">
                      <input type="text" class="form-control" value={this.state.empName} onChange={(event)=>this.setState({empName: event.target.value})} placeholder="Name"/>
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" value={this.state.empSalary} onChange={(event)=>this.setState({empSalary: event.target.value})} placeholder="Salary"/>
                    </div>
                  </div>
                  <button type="submit" disabled={check} class="btn btn-dark text-white">Update</button>
                </form>
              }
              {
                this.state.updateEmployee &&
                <div class="alert alert-dark mt-4" role="alert">
                  <h4 class="alert-heading">Details Updated Succesfully!</h4>
                </div>
              }
              
            </Resizable>
        )
    }
}
