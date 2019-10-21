import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Query extends Component {
  render() {
    console.log(this.props.location.query)
    return (
      <div>
        <h1>Query</h1>
      </div>
    )
  }
}

Query.propTypes = {
  location: PropTypes.object
}
