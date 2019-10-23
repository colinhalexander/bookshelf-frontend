import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignInPage extends Component {

  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  }

  toggleExistingUser = () => {
    if (this.props.location.existingUser) {
      return <Link to={{ pathname: "/signin", existingUser: false}} >Don't have an account yet?</Link>
    } else {
      return <Link to={{ pathname: "/signin", existingUser: true}} >Already have an account?</Link>
    }
  }

  addNamesToForm = () => {
    return (
      <span id="form-names">
        <input onChange={this.handleChange} type="text" name="firstName" placeholder="First Name" />
        <input onChange={this.handleChange} type="text" name="lastName" placeholder="Last Name" />
      </span>
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="sign-in-wrapper">
        <div className="sign-in">
          <h3>{this.props.location.existingUser ? "Log In" : "Sign Up"}</h3>
          <form className="sign-in-form">
            {!this.props.location.existingUser ? this.addNamesToForm() : ""}
            <input onChange={this.handleChange} type="text" name="username" placeholder="Username" />
            <input onChange={this.handleChange} type="password" name="password" placeholder="Password"/>
            <input id="submit" type="submit" />
          </form>
          {this.toggleExistingUser()}
        </div>
      </div>
    )
  }
}