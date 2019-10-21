import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routers from './Router'
import './App.scss'

const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}
export default class App extends Component {
  render() {
    // console.log(process.env)
    return (
      <div className="app">
        <Router
          basename="/app"
          /*forceRefresh={true} keyLength={6}*/ getUserConfirmation={getConfirmation}
        >
          <div className="left-nav">
            <Link className="nav" to="/">
              首页
            </Link>
            <Link className="nav" to="/params/params/1">
              parmas
            </Link>
            <Link
              className="nav"
              to={{
                pathname: '/query',
                query: { type: 'query', name: 'query' }
              }}
            >
              query
            </Link>
            <Link
              className="nav"
              to={{
                pathname: '/state',
                search: '?sort=name',
                hash: '#the-hash',
                state: { type: 'state', name: 'state' }
              }}
            >
              state
            </Link>
            <Link className="nav" to="/double-router">
              double-router
            </Link>
            <Link className="nav" to="/router-confirm">
              router-confirm
            </Link>
            <Link replace className="nav" to="/replace">
              replace
            </Link>
            <Link replace className="nav" to="/jumb-back">
              jumb-back
            </Link>
          </div>
          <div className="container">
            <Routers />
          </div>
        </Router>
      </div>
    )
  }
}
