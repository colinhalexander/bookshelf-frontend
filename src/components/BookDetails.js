import React from 'react'

const BookDetails = (props) => {
  return (
    <div className="book-details-wrapper">
      <button id="close-details" onClick={props.closeDetails}>Close</button>
      <div className="book-details">
        <div className="book-image-and-links">
          <img src={props.image_url} alt={props.title} />
          <a href={props.buy_url} target="_blank" rel="noopener noreferrer">Buy this book</a>
        </div>
        <div className="book-information">
          <h3>{props.title}</h3>
          <p>by {props.authors}</p>
          <br></br>
          <p>{props.description}</p>
          <br></br>
          <p className="small-print">Publisher: {props.publisher}</p>
          <p className="small-print">ISBN10: {props.isbn10}</p>
          <p className="small-print">ISBN13: {props.isbn13}</p>
        </div>
      </div>
    </div>
  )
}

export default BookDetails