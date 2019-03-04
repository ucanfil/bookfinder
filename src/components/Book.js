import React, { Component } from 'react'

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
            <div className='author'>By: {book.volumeInfo.authors ? book.volumeInfo.authors.map(author => author).join(', ') : null}</div>
            <div className='publisher'>Published By: {book.volumeInfo.publisher ? book.volumeInfo.publisher : null}</div>
            <a href={book.volumeInfo.infoLink} target='_'>See this Book</a>
          </div>
        </div>
      </li>
    )
  }
}

export default Book