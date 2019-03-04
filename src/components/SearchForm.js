import React, { Component } from 'react'


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

export default SearchForm