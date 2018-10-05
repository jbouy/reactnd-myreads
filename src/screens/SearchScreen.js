import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../util/BooksAPI';
import BookList from '../components/BookList';

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

  onBookShelfChange = book => {
    this.props.onBookShelfChange(book);
    this.mapShelfToFound(this.state.foundBooks);
  };

  searchBooks = query => {
    BooksAPI.search(query).then(result => {
      const found = !!result && !result.error ? result : [];
      this.mapShelfToFound(found);
    });
  };

  mapShelfToFound = found => {
    const shelf = this.props.books.reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {});

    console.log(shelf);

    this.setState({
      foundBooks: found.map(book => {
        const bookOnShelf = shelf[book.id];
        const currentShelf = !!bookOnShelf ? bookOnShelf.shelf : 'none';

        return {...book, shelf: currentShelf};
      }),
    });
  };

  render() {
    console.log(this.state.foundBooks);

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
          <BookList books={this.state.foundBooks} onBookShelfChange={this.onBookShelfChange} />
        </div>
      </div>
    );
  }
}

SearchScreen.propTypes = {
  books: PropTypes.array,
  onBookShelfChange: PropTypes.func,
};

export default SearchScreen;
