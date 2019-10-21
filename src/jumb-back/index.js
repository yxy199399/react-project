import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class JumbBack extends Component {
  jumb = () => {
    // this.props.history.push({ pathname: '/home' })
    this.props.history.push('/')
  }
  back = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div>
        <h1>JumbBack</h1>
        <button onClick={this.jumb}>跳转</button>
        <button onClick={this.back}>返回</button>
      </div>
    )
  }
}

JumbBack.propTypes = {
  history: PropTypes.object
}
