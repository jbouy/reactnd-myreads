import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
  render() {
    const {book} = this.props;
    const {imageLinks} = book;

    // TODO: setup current shelf options
    return (
      <li>
        <div className="book">
          <div className="book-top">
            {!!imageLinks && (
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: 'url("' + imageLinks.thumbnail + '"',
                }}
              />
            )}
            <BookShelfChanger book={book} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {!!book.authors && book.authors.map(author => <div key={author}>{author}</div>)}
          </div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
