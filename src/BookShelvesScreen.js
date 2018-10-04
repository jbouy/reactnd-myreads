import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class BookShelvesScreen extends Component {
  filterBooksByShelf = shelf => {
    return this.props.books.filter(book => book.shelf === shelf);
  };

  render() {
    return (
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
    );
  }
}

BookShelvesScreen.propTypes = {
  books: PropTypes.array,
};

export default BookShelvesScreen;
