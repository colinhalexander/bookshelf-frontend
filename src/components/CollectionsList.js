import React, { Component } from 'react'

export default class CollectionsList extends Component {

  makeCollectionsList = () => {
    return this.props.user.collections.map(collection => {
      return (
        <div key={collection.name} className="collection-header" onClick={this.props.handleClick}>
          {collection.name}
        </div>
      )
    })
  }

  render() {
    return(
      <div className="collections-list">
        {this.props.user ? this.makeCollectionsList() : ""}
      </div>
    )
  }
}