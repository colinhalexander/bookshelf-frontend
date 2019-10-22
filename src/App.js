import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './containers/HomePage'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/about" component={AboutPage} /> */}
      </div>
    </Router>
  );
}

export default App;
