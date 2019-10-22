import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class State extends Component {
  render() {
    console.log(this.props.location.state)
    return (
      <div>
        <h1>state</h1>
      </div>
    )
  }
}

State.propTypes = {
  location: PropTypes.object
}
