import React, { Component } from 'react'
import BookDisplay from './BookDisplay'

export default class CollectionBooks extends Component {

  makeBookList = () => {
    this.props.user.collections
      .filter(collection => collection.name === this.props.collection)
      .books
      .map(book => <BookDisplay key={book.isbn13} {...book} />)
  }

  render() {
    return(
      <div className="collection-books">
        {this.props.user ? "" : ""}
      </div>
    )
  }
}