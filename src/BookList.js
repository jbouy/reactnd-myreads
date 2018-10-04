import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = props => {
  const {books = []} = props;

  return (
    <ol className="books-grid">
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </ol>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookList;
