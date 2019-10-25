import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

export default class NavBar extends Component {

  toggleLoginLink = () => {
    if (this.props.user) {
      return (
        <>
          <Link className="nav-link user-link" to={`/users/${this.props.user.username}`} >{this.props.user.username}</Link>
          <div className="nav-link logout" onClick={this.props.logOut}>Logout</div>
        </>
      )
    } else {
      return (<Link className="nav-link" to={{ pathname: "/signin", existingUser: true}} >Login</Link>)
    }
  }

  render() {
    return (
      <header>
        <Link id="home" to="/">
          <hgroup id="brand">
            <img id="logo" src={logo} alt="logo" />
            <h1>BookShelf</h1>
          </hgroup>
        </Link>
        <nav>
          <Link className="nav-link" to="/about" >About</Link>
          <Link className="nav-link" to="/contact" >Contact</Link>
          {this.toggleLoginLink()}
        </nav>
      </header>
    )
  }
}