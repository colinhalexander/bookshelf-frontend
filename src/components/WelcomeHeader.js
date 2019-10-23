import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WelcomeHeader extends Component {

  toggleSignUpLink = () => {
    if (this.props.user) {
      return ""
    } else {
      return (<Link to={{ pathname: "/signin", existingUser: false}} >
      <button id="get-started">Get Started</button>
    </Link>)
    }
  }

  render() {
    return (
      <div className="welcome-header">
        <div className="welcome-description">
          <h2>Welcome</h2>
          <p>With BookShelf, you can find your favorite books, save them to collections, set reading goals, and track your progress.
          </p>
        </div>
        {this.toggleSignUpLink()}
      </div>
    )
  }
}