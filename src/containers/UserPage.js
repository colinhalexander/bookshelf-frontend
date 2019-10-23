import React, { Component } from 'react'

export default class UserPage extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.username}</h3>
      </div>
    )
  }
}