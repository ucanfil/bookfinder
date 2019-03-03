import React, { Component } from 'react'
import './App.scss'

class Book extends Component {
  render() {
    return (
      <section className='book_container'>
      </section>
    )
  }
}


class App extends Component {
  state = {
    books: [],
    query: ''
  }

  

  render() {
    return (
      <div className="App">
        <Book />
      </div>
    )
  }
}

export default App
