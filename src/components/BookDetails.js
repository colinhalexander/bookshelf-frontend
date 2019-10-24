import React, { Component } from 'react'

export default class BookDetails extends Component {

  addBookToCollection = () => {
    
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        title: this.props.title,
        authors: this.props.authors,
        description: this.props.description,
        publisher: this.props.publisher,
        image_url: this.props.image_url,
        buy_url: this.props.buy_url,
        isbn10: this.props.isbn10,
        isbn13: this.props.isbn13,
        collection_id: this.props.user.collections[0].id
      })
    }

    fetch("http://localhost:3000/books", request)
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
  }

  showAddBookButton = () => {
    return (
      <button onClick={this.addBookToCollection} className="add-book-btn">
          Add to Collections
      </button>
    )
  }

  render() {
    return (
      <div className="book-details-wrapper">
        <button id="close-details" onClick={this.props.closeDetails}>Close</button>
        <div className="book-details">
          <div className="book-image-and-links">
            <img src={this.props.image_url} alt={this.props.title} />
            <a className="link" href={this.props.buy_url} target="_blank" rel="noopener noreferrer">Buy this book</a>
            {this.props.user ? this.showAddBookButton() : "" }
          </div>
          <div className="book-information">
            <h3>{this.props.title}</h3>
            <p>by {this.props.authors}</p>
            <br></br>
            <p>{this.props.description}</p>
            <br></br>
            <p className="small-print">Publisher: {this.props.publisher}</p>
            <p className="small-print">ISBN10: {this.props.isbn10}</p>
            <p className="small-print">ISBN13: {this.props.isbn13}</p>
          </div>
        </div>
      </div>
    )
  }
}
