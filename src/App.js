import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routess from "./Component/Routess";
import NavBar from "./Component/NavBar";
import LoadingBar from "react-top-loading-bar";


import React, { Component } from 'react'

export default class App extends Component {
   getDarkMode=(mode)=>{
    return mode
  }
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
   }
  render() {
    return (
      <div className="App">
    
      <NavBar />
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
      <Routess setProgress={this.setProgress}/>
    </div>
    )
  }
}

