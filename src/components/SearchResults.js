import React, { Component } from 'react'
import BookDisplay from "./BookDisplay"

export default class SearchResults extends Component {

  renderResults = () => {
    return this.props.books.map(book => <BookDisplay user={this.props.user} key={book.isbn13} {...book} />)
  }

  renderError = () => {
    return (
      <p id="no-results">Oops! No results matched your search.</p>
    )
  }

  render() {
    return (
      <div className="search-results">
        {this.props.books.length > 0 ? this.renderResults() : this.renderError()}
      </div>
    )
  }
}