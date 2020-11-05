import React, { Component } from 'react';
import List from "./Component/List";
import Update from "./Component/Update";
import Insert from "./Component/Insert";
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      height:300,
      heightTwo:300,
      widthOne:550,
      widthTwo:550,
      
      
    }
  }

  render() {
    return (
      <>
        <div style={{display:"flex"}}>
          <div style={{display:"inline"}}>
            <Insert/>
          </div>
          <div style={{display:"inline"}}>
            <Update/>
          </div>
        </div>
        <div style={{display:"inline"}}>
          <List/>
        </div>
      </>
    )
  }
}
