import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import BookShelf from '../components/BookShelf';

const BookShelvesScreen = props => {
  const {books} = props;

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <BookShelf title={'Currently Reading'} shelf="currentlyReading" books={books} />
          <BookShelf title={'Want to Read'} shelf="wantToRead" books={books} />
          <BookShelf title={'Read'} shelf="read" books={books} />
        </div>
      </div>

      <div className="open-search">
        <Link to="/search" />
      </div>
    </div>
  );
};

BookShelvesScreen.propTypes = {
  books: PropTypes.array,
};

export default BookShelvesScreen;
