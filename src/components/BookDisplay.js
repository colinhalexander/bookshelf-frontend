import React, { Component } from 'react'

export default class BookDisplay extends Component {

  render() {
    return (
      <div className="book-display">
        <img src={this.props.book_image} alt="book cover"/>
        <h4>{this.toTitleCase(this.props.title)}</h4>
        <p>{this.props.author}</p>
      </div>
    )
  }

  toTitleCase = (string) => {
    return string.toLowerCase().split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }
}