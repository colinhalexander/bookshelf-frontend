import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import ContactPage from './containers/ContactPage'
import SignInPage from './containers/SignInPage'
import UserPage from './containers/UserPage'

export default class App extends Component {
  
  state = {
    user: null
  }

  componentDidMount() {
    if (localStorage.getItem("userId")) {
      this.setUser(localStorage.getItem("userId"))
    }
  }

  setUser = (userId) => {
    
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }

    fetch(`http://localhost:3000/users/${userId}`, request)
      .then(response => response.json())
      .then(response => {
        if (!response.error) {
          this.setState({
            user: {
              ...response.data.attributes,
              id: response.data.id
            }
          })
        } else {
          console.log(response.error)
        }
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar user={this.state.user} />
          <Route exact path="/" render={() => <HomePage user={this.state.user} />} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route 
            exact path="/signin" 
            render={(props) => <SignInPage setUser={this.setUser} {...props} />} />
          <Route exact path="/users/:username" render={() => <UserPage user={this.state.user} setUser={this.setUser} />} />
        </div>
      </Router>
    )
  }
}