import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Params extends Component {
  render() {
    console.log(this.props.match.params)
    return (
      <div>
        <h1>Params</h1>
      </div>
    )
  }
}

Params.propTypes = {
  match: PropTypes.object
}
