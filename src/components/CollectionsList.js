import React, { Component } from 'react'

export default class CollectionsList extends Component {

  makeCollectionsList = () => {
    let active
    return this.props.user.collections.map(collection => {
      active = this.props.activeCollection === collection.name ? "active" : ""
      return (
        <div key={collection.name} className={`collection-header ${active}`} onClick={this.props.handleClick}>
          {collection.name}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="collections-list">
        {this.props.user ? this.makeCollectionsList() : ""}
      </div>
    )
  }
}