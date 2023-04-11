import React, { Component } from 'react'
import { Route,Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import News from './News'
import Services from './Services'

export default class Routess extends Component {
  render() {
    return (
      <Routes>
      <Route path='/' exact element={<News setProgress={this.props.setProgress} pageSize={10}/>}/>
      <Route path='/about' exact element={<About  setProgress={this.props.setProgress}/>}/>
      <Route path='/services' exact element={<Services  setProgress={this.props.setProgress}/>}/>
      <Route path='/contact' exact element={<Contact  setProgress={this.props.setProgress}/>}/>
      </Routes>
    )
  }
}
