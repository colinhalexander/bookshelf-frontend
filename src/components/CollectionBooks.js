import React, { Component } from 'react'
import BookDisplay from './BookDisplay'

export default class CollectionBooks extends Component {

  makeBookList = () => {
    return this.props.user.collections
      .filter(collection => collection.name === this.props.activeCollection)[0]
      .books
      .map(book => <BookDisplay key={book.isbn13} {...book} />)
  }

  render() {
    return(
      <div className="collection-books">
        {this.props.user ? this.makeBookList() : ""}
      </div>
    )
  }
}