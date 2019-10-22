import React, { Component } from 'react'
import BookDisplay from "./BookDisplay"

export default class SearchResults extends Component {

  renderResults = () => {
    return this.props.books.map(book => <BookDisplay key={book.title} {...book} />)
  }

  render() {
    return (
      <div className="search-results">
        {this.renderResults()}
      </div>
    )
  }
}