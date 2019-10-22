import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WelcomeHeader extends Component {

  render() {
    return (
      <div className="welcome-header">
        <div className="welcome-description">
          <h2>Welcome</h2>
          <p>With BookShelf, you can find your favorite books, save them to collections, set reading goals, and track your progress
          </p>
        </div>
        <Link to="/signup">
          <button id="get-started">Get Started</button>
        </Link>
      </div>
    )
  }
}