import React, { Component } from 'react'
import './App.scss'
import Book from './components/Book'
import SearchForm from './components/SearchForm'


class App extends Component {
  state = {
    books: []
  }

  searchBooks = (query) => {
    if (!query) return
    const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`

    fetch(searchUrl)
      .then(res => res.json())
      .then(res => this.setState({ books: res.items }))
      .catch(err => alert('An error occured while loading books from Google Maps API', err))
  }

  render() {
    return (
      <div className="App">
        <h1>BOOK FINDER</h1>
        <SearchForm
          onSearch={this.searchBooks}
        />
        <ul className='books_container'>
          {this.state.books.map(book =>
            <Book
              book={book}
              key={book.id}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default App