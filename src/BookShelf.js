import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';

const BookShelf = props => {
  const {title, ...rest} = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookList {...rest} />
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string,
};

export default BookShelf;
