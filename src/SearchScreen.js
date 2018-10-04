import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';

class SearchScreen extends Component {
  state = {
    query: '',
    foundBooks: [],
  };

  onQueryChange = evt => {
    this.setState(
      {
        query: evt.target.value,
      },
      () => this.searchBooks(this.state.query)
    );
  };

  searchBooks = query => {
    // TODO: Link bookshelf with found books to match on current shelf
    BooksAPI.search(query).then(books => {
      const foundBooks = !!books && !books.error ? books : [];

      this.setState({
        foundBooks,
      });
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" title="Close" className="close-search" />

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.onQueryChange}
            />
          </div>
        </div>

        <div className="search-books-results">
          <BookList books={this.state.foundBooks} />
        </div>
      </div>
    );
  }
}

SearchScreen.propTypes = {
  books: PropTypes.array,
};

export default SearchScreen;
