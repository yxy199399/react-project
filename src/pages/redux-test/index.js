// Test.jsx

import React, { Component } from 'react'

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// 引入action
import { setPageTitle } from '../../store/actions.js'

class ReduxTest extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    newTitle: ''
  }

  componentDidMount() {
    let { setPageTitle } = this.props
    // 触发setPageTitle action
    setPageTitle('新的标题')
  }

  titleChange = e => {
    this.setState({
      newTitle: e.target.value
    })
  }

  save = () => {
    const { newTitle } = this.state
    let { setPageTitle } = this.props
    setPageTitle(newTitle)
  }

  render() {
    // 从props中解构store
    let { pageTitle } = this.props
    const { newTitle } = this.state

    // 使用store
    return (
      <div>
        <h1>{pageTitle}</h1>
        <input value={newTitle} onChange={this.titleChange} />
        <button onClick={this.save}>修改标题</button>
      </div>
    )
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = state => {
  return {
    pageTitle: state.pageTitle
  }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    setPageTitle(data) {
      // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
      dispatch(setPageTitle(data))
      // 执行setPageTitle会返回一个函数
      // 这正是redux-thunk的所用之处:异步action
      // 上行代码相当于
      /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
    }
  }
}

ReduxTest.propTypes = {
  setPageTitle: PropTypes.any,
  pageTitle: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxTest)
