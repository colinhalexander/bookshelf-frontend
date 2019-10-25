import React, { Component } from 'react'
import BookDetails from './BookDetails'

export default class BookDisplay extends Component {

  state = {
    showDetails: false
  }

  handleClick = () => {
    this.setState({
      showDetails: true
    })
  }

  closeDetails = () => {
    this.setState({
      showDetails: false
    })
  }
  
  showDetails = () => {
    if (this.state.showDetails) {
      return <BookDetails setUser={this.props.setUser ? this.props.setUser : null} closeDetails={this.closeDetails} {...this.props} />
    }
    return <></>
  }

  render() {
    return (
      <>
        <div className="book-display" onClick={this.handleClick}>
          <img src={this.props.image_url} alt="book cover"/>
          <h4>{this.props.title}</h4>
          <p>{this.props.authors}</p>
        </div>
        {this.showDetails()}
      </>
    )
  }
}