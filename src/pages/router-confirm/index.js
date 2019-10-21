import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'
export default class RouterConfirm extends Component {
  render() {
    return (
      <div>
        <h1>router-confirm</h1>
        <Prompt message="你确定要离开当前页面吗？" />
      </div>
    )
  }
}
