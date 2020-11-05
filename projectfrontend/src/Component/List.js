import React, { Component } from 'react'
import { Resizable } from "re-resizable";
import { getAllUserAPI } from "../apicall";
export default class List extends Component {
    constructor(props){
        super(props);
        this.state={
            height:300,
            width:1120,
            data:[
                
            ]
        }
    }

    

    render() {
        return (
            
            <Resizable
            className="card list bg-warning"
            size={{ width: this.state.width, height: this.state.height }}
            onResizeStop={(e, direction, ref, d) => {
              this.setState({
                width: this.state.width + d.width,
                height: this.state.height + d.height,
              });
            }}
            >
                <button className="btn" onClick={()=>{
                    getAllUserAPI().then(res=>{
                        alert(res)
                    })
                }}></button>
                <div className="list-table">
                    <table class="table">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.data.map((data)=>(
                            <tr key={data.empId} className="bg-secondary">
                                <td>{data.empId}</td>
                                <td>{data.name}</td>
                                <td>{data.salary}</td>
                            </tr>
                            ))
                        }
                        
                        </tbody>
                    </table>
                </div>
            </Resizable>
        )
    }
}
