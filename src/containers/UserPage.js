import React, { Component } from 'react'
import CollectionsList from '../components/CollectionsList'
import CollectionBooks from '../components/CollectionBooks'

export default class UserPage extends Component {

  state = {
    activeCollection: "Reading Now"
  }

  handleClick = (event) => {
    console.log(event.target.innerText)
    this.setState({
      activeCollection: event.target.innerText
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
          <div className="collections-display">
            <CollectionsList user={this.props.user} activeCollection={this.state.activeCollection} handleClick={this.handleClick} />
            <CollectionBooks activeCollection={this.state.activeCollection} user={this.props.user} />
          </div>
        </section>
      </div>
    )
  }
}