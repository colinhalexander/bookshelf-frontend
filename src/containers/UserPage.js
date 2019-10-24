import React, { Component } from 'react'
import CollectionsList from '../components/CollectionsList'
import CollectionBooks from '../components/CollectionBooks'

export default class UserPage extends Component {

  state = {
    collection: "To Read"
  }

  handleClick = (event) => {
    this.setState({
      collection: event.target.innerText
    })
  }

  componentDidMount() {
    if (!this.props.user && localStorage.getItem("userId")) {
      this.props.setUser(localStorage.getItem("userId"))
    }
  }

  render() {
    return (
      <div className="user-page-wrapper">
        <h3>Your Collections</h3>
        <section className="user-page">
          <CollectionsList user={this.props.user} handleClick={this.handleClick} />
          <CollectionBooks collection={this.state.collection} user={this.props.user} />
        </section>
      </div>
    )
  }
}