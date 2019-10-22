import React, { Component } from 'react'
import WelcomeHeader from '../components/WelcomeHeader'
import SearchContainer from './SearchContainer'

export default class HomePage extends Component {

  render() {
    return (
      <>
        <WelcomeHeader />
        <main>
          <SearchContainer />
        </main>
      </>
    )
  }
}