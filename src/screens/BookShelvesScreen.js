import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import BookShelf from '../components/BookShelf';
import Shelves from '../shelves';

const BookShelvesScreen = props => {
  const {books, ...rest} = props;

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {Object.keys(Shelves).map(key => {
            const title = Shelves[key];
            return <BookShelf key={key} title={title} shelf={key} books={books} {...rest} />;
          })}
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
