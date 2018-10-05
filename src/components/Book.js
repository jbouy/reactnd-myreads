import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
  render() {
    const {book, onBookShelfChange} = this.props;
    const {imageLinks} = book;

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
            <BookShelfChanger book={book} onBookShelfChange={onBookShelfChange} />
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
  book: PropTypes.object.isRequired,
  onBookShelfChange: PropTypes.func,
};

export default Book;
