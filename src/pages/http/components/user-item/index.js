/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'
const UserItem = props => {
  const { user, idx, onClick } = props
  return (
    <div className="user-item">
      <span>{user.name}</span>
      <span>{user.age}</span>
      <span>{user.class}</span>
      <button
        onClick={() => {
          onClick({ idx: idx, edit: true })
        }}
      >
        编辑
      </button>
      <button
        onClick={() => {
          onClick({ idx: idx, edit: false })
        }}
      >
        删除
      </button>
    </div>
  )
}

UserItem.propType = {
  name: PropTypes.string
}

export default UserItem
