import React, { Component } from 'react'
import axios from '../../helper/http'
import UserItem from './components/user-item'
import './index.scss'
export default class Http extends Component {
  state = {
    userlist: [],
    userItme: {
      name: '',
      age: '',
      class: ''
    },
    isAdd: true
  }

  componentDidMount() {
    // 服务端测试
    if (process.env.ENV_CONFIG === 'prod') {
      axios.post('/api/category/list').then(res => {
        console.log(res)
      })
    } else {
      axios.get('/user').then(res => {
        this.setState({
          userlist: res.data
        })
      })
    }
  }

  getIdx = e => {
    const { userlist } = this.state
    let newItem = userlist[e.idx]
    if (e.edit) {
      this.setState({
        userItme: newItem,
        isAdd: false
      })
    } else {
      axios.delete('/user', { id: newItem.id }).then(res => {
        console.log(res)
      })
    }
    console.log(e)
  }

  change = (key, e) => {
    const { userItme } = this.state
    let newItem = userItme
    newItem[key] = e.target.value
    this.setState({
      userItme: newItem
    })
  }

  save = () => {
    const { userItme, isAdd } = this.state
    let newItem = {
      name: '',
      age: '',
      class: ''
    }
    if (isAdd) {
      axios.put('/user', userItme).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.setState({
            isAdd: true,
            userItme: newItem
          })
        }
      })
    } else {
      axios.post('/user', userItme).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.setState({
            isAdd: true,
            userItme: newItem
          })
        }
      })
    }
  }

  renderList = () => {
    const { userlist } = this.state
    return userlist.map((item, idx) => {
      return <UserItem key={idx} idx={idx} onClick={this.getIdx} user={item} />
    })
  }

  render() {
    const { userItme } = this.state
    return (
      <div className="http">
        <h1>Http</h1>
        <div>
          姓名：
          <input value={userItme.name} onChange={this.change.bind(this, 'name')} />
          年龄:
          <input value={userItme.age} onChange={this.change.bind(this, 'age')} />
          班级:
          <input value={userItme.class} onChange={this.change.bind(this, 'class')} />
          <button onClick={this.save}>保存</button>
        </div>
        {this.renderList()}
      </div>
    )
  }
}
