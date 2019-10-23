import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'

export default class SearchContainer extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/nyt")
      .then(response => response.json())
      .then(response => {
        
        const books = response.results.books.map(book => {
          return {
            title: this.toTitleCase(book.title),
            authors: book.author,
            description: book.description,
            publisher: book.publisher,
            image_url: book.book_image,
            buy_url: book.amazon_product_url,
            isbn10: book.primary_isbn10,
            isbn13: book.primary_isbn13
          }
        })

        this.setState({
          books: books
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        query: formData.get("query"),
        by: formData.get("by")
      })
    }

    fetch("http://localhost:3000/google", request)
      .then(response => response.json())
      .then(response => {
        const books = response.items.map(book => {

          if (this.bookDataIsValid(book)) {
            return {
              title: this.toTitleCase(book.volumeInfo.title),
              authors: this.authorsArrayToString(book.volumeInfo.authors),
              description: book.volumeInfo.description,
              publisher: book.volumeInfo.publisher,
              image_url: book.volumeInfo.imageLinks.thumbnail,
              buy_url: book.saleInfo.buyLink,
              isbn10: book.volumeInfo.industryIdentifiers[0].identifier,
              isbn13: book.volumeInfo.industryIdentifiers[1].identifier
            }
          } else {
            return null
          }
        })
          
        this.setState({
          books: books.filter(book => book)
        })
      })
    .catch(error => console.log(error))
  }

  bookDataIsValid = (book) => {
    const keys = [
      book.volumeInfo.title, 
      book.volumeInfo.authors,
      book.volumeInfo.description,
      book.volumeInfo.publisher,
      book.volumeInfo.imageLinks,
      book.saleInfo.buyLink,
      book.volumeInfo.industryIdentifiers
    ]
    return (keys.filter(key => key).length === keys.length && keys[6].length === 2)
  }

  toTitleCase = (string) => {
    return string.toLowerCase().split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  authorsArrayToString = (authors) => {
    if (authors.length === 1) {
      return authors[0]
    } else if (authors.length === 2) {
      return authors[0] + " and " + authors[1]
    } else {
      return authors.slice(0, authors.length - 1).join(", ") + ", and " + authors[authors.length - 1]
    }
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