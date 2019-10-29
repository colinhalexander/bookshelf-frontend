import React, { Component } from 'react'

export default class BookDetails extends Component {

  state = {
    showCollectionMenu: false,
    chosenCollectionId: ""
  }

  moveBookToCollection = () => {
    
    this.setState({
      showCollectionMenu: false
    })

    const method = this.props.isInCollections ? "PATCH" : "POST"
    const path = this.props.isInCollections ? `books/${this.props.id}` : "books"

    const request = {
      method: method,
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
        collection_id: this.state.chosenCollectionId
      })
    }

    fetch(`https://bookshelf-backend-cha.herokuapp.com/${path}`, request)
    
    if (this.props.isInCollections) {
      this.closeDetailsAndReload()
    }
  }

  deleteBook = () => {
    
    const request = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    }

    fetch(`https://bookshelf-backend-cha.herokuapp.com/books/${this.props.id}`, request)

    this.closeDetailsAndReload()
  }

  closeDetailsAndReload = () => {
    this.props.closeDetails()
    setTimeout(() => {
      window.location.reload()
    }, 800)
  }

  handleSelection = (event) => {
    this.setState({
      chosenCollectionId: event.target.value
    })
  }

  showCollectionMenu = () => {
    return (
      <div className="select-collection">
        <select onChange={this.handleSelection} name="collection">
          <option value="">Select Collection</option>
          {this.generateOptions()}
        </select>
        <button onClick={this.moveBookToCollection} className="add-book-btn">
            {this.props.isInCollections ? "Change Collection" : "Add to Collection"}
        </button>
      </div>
    )
  }

  generateOptions = () => {
    return this.props.user.collections.map(collection => {
      return (
        <option key={collection.id} value={collection.id}>{collection.name}</option>
      )
    })
  }

  showAddBookButton = () => {
    return (
      <button onClick={() => this.setState({ showCollectionMenu: true })} className="add-book-btn">
          {this.props.isInCollections ? "Change Collection" : "Add to Collections"}
      </button>
    )
  }

  showDeleteBookButton = () => {
    return (
      <button id="delete-book" onClick={this.deleteBook}>
        Remove from Collections
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
            {this.state.showCollectionMenu ? this.showCollectionMenu() : this.showAddBookButton()}
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
        {this.props.isInCollections ? this.showDeleteBookButton() : ""}
      </div>
    )
  }
}
