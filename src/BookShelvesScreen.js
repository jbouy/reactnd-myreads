import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';

class BookShelvesScreen extends Component {
  filterBooksByShelf = shelf => {
    return this.props.books.filter(book => book.shelf === shelf);
  };

  render() {
    // TODO: pass all books and filter in BookShelf
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <BookShelf title={'Currently Reading'} books={this.filterBooksByShelf('currentlyReading')} />
            <BookShelf title={'Want to Read'} books={this.filterBooksByShelf('wantToRead')} />
            <BookShelf title={'Read'} books={this.filterBooksByShelf('read')} />
          </div>
        </div>

        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    );
  }
}

BookShelvesScreen.propTypes = {
  books: PropTypes.array,
};

export default BookShelvesScreen;
