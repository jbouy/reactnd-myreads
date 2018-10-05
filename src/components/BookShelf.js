import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

const BookShelf = props => {
  const {books = [], title = '', shelf} = props;
  const booksOnShelf = books.filter(book => book.shelf === shelf);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList books={booksOnShelf} />
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string,
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array,
};

export default BookShelf;
