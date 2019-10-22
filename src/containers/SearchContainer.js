import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'

export default class SearchContainer extends Component {

  state = {
    books: []
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // fetch from GoogleBooks API, setState
  }

  componentDidMount() {
    fetch("http://localhost:3000/nyt")
      .then(response => response.json())
      .then(response => {
        this.setState({
          books: response.results.books
        })
      })
  }

  render() {
    return (
      <section className="search-container">
        <SearchBar query={this.state.query} handleSubmit={this.handleSubmit} />
        <SearchResults books={this.state.books} />
      </section>
    )
  }
}