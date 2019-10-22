import React, { Component } from 'react'

export default class SearchBar extends Component {

  state = {
    query: ""
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmitAndClearForm = (event) => {
    this.props.handleSubmit(event)
    this.setState({
      query: ""
    })
  }

  render() {
    return (
      <div className="search-bar">
        <h3>Find a Book:</h3>
        <form className="search-form" onSubmit={this.handleSubmitAndClearForm}>
          <input id="query" type="text" name="query" value={this.state.query} onChange={this.handleChange} placeholder="The Great Gatsby, Karl Marx, World War II..." />
          <label>by: </label>
          <select name="by">
            <option value="all" >All</option>
            <option value="title" >Title</option>
            <option value="author" >Author</option>
            <option value="subject" >Subject</option>
          </select>
          <input id="search-submit" type="submit" value="Search" />
        </form>
      </div>
    )
  }
}