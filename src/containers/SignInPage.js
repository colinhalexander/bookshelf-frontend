import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignInPage extends Component {

  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: ""
  }

  static defaultProps = {
    location: {
      existingUser: false
    }
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
        <input onChange={this.handleChange} type="text" name="firstname" placeholder="First Name" />
        <input onChange={this.handleChange} type="text" name="lastname" placeholder="Last Name" />
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

    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this.state)
    }

    this.props.location.existingUser 
      ? this.logInUser(request) 
      : this.createNewUser(request) 
  }
  
  createNewUser = (request) => {
    fetch("http://localhost:3000/users", request)
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error))
  }

  logInUser = (request) => {
    fetch("http://localhost:3000/login", request)
      .then(response => response.json())
      .then(response => {
        localStorage.setItem("token", response.token)
        localStorage.setItem("userId", response.user_id)
        this.props.setUser(response.user_id)
        window.location.href = "http://localhost:3001/"
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="sign-in-wrapper">
        <div className="sign-in">
          <h3>{this.props.location.existingUser ? "Log In" : "Sign Up"}</h3>
          <form className="sign-in-form" onSubmit={this.handleSubmit}>
            {!this.props.location.existingUser ? this.addNamesToForm() : ""}
            <input onChange={this.handleChange} type="text" name="username" placeholder="Username"/>
            <input onChange={this.handleChange} type="password" name="password" placeholder="Password"/>
            <input id="submit" type="submit"/>
          </form>
          {this.toggleExistingUser()}
        </div>
      </div>
    )
  }
}