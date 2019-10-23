import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import ContactPage from './containers/ContactPage'
import SignInPage from './containers/SignInPage'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/signin" component={SignInPage} />
      </div>
    </Router>
  );
}

export default App;
