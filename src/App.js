import React, { Component } from 'react'
import './App.scss'

class Book extends Component {
  render() {
    const { book } = this.props
    return (
      <li
        className="book"
      >
        <div
          className="book_img_container"
        >
          <span className="book_img_container_img">
            <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title ? book.title : ''}/>
          </span>
        </div>
        <div className="book_content">
          <div className='image_placeholder'></div>
          <div className='content_placeholder'>
            <div className='title'>{book.volumeInfo.title}</div>
            <div className='author'>By: {book.volumeInfo.authors ? book.volumeInfo.authors[0] : null}</div>
            <div className='publisher'>Published By: {book.volumeInfo.publisher ? book.volumeInfo.publisher : null}</div>
            <a href={book.volumeInfo.infoLink} target='_'>See this Book</a>
          </div>
        </div>
      </li>
    )
  }
}

class SearchForm extends Component {
  state = {
    query: ''
  }

  setQuery = (query) => {
    this.setState({ query })
  }

  render() {
    return (
      <section className='search_container'>
        <label htmlFor="search"></label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          onChange={(e) => this.setQuery(e.target.value)}
        />
        <button
          onClick={() => this.props.onSearch(this.state.query)}
        >Search
        </button>
      </section>
    )
  }
}


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
      .catch(err => alert('An error occured while loading books from Google Maps API'))
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
