import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Child1 from './child1'
import Child2 from './child2'
import './index.scss'
export default class DoubleRouter extends Component {
  render() {
    return (
      <div className="double-router">
        <div className="two-nav">
          <h1>double-router</h1>
          <Link className="nav" to="/double-router">
            child1
          </Link>
          <Link className="nav" to="/double-router/child2">
            child2
          </Link>
        </div>

        <div className="two-container">
          <Route exact path="/double-router" component={Child1} />
          <Route path="/double-router/child2" component={Child2} />
        </div>
      </div>
    )
  }
}
