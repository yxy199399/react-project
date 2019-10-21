import React, { Component } from 'react'
import Icon from './assets/book.png'
import './App.scss'
export default class App extends Component {
  render() {
    // console.log(process.env)
    return (
      <div className="app">
        <img src={Icon} />
        <p className="p">hello react</p>
      </div>
    )
  }
}
