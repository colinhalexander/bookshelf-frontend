import React from 'react'

const AboutPage = () => {

  return (
    <>
      <div className="about-header">
        <h2>About</h2>
      </div>
      <main>
        <div className="about">
          <p>BookShelf is an application designed for readers to find and save books, set reading goals, and track their progress. It is built with a React.js frontend and Ruby on Rails backend. Book data is gathered from the New York Times Bestsellers API and the Google Books API.</p>
        </div>
      </main>
    </>
  )
}

export default AboutPage