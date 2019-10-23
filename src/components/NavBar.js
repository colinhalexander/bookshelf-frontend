import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

export default class NavBar extends Component {

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
          <Link className="nav-link" to={{ pathname: "/signin", existingUser: true}} >Login</Link>
        </nav>
      </header>
    )
  }
}