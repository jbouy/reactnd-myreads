import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from '../util/BooksAPI';
import Shelves from '../shelves';

class BookShelfChanger extends Component {
  handleChange = e => {
    var shelf = e.target.value;
    var book = {...this.props.book, shelf};

    BooksAPI.update(book, shelf).then(() => this.props.onBookShelfChange(book));
  };

  getCurrentShelf = book => (!!Shelves[book.shelf] ? book.shelf : 'none');

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.getCurrentShelf(this.props.book)} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          {Object.keys(Shelves).map(key => {
            const title = Shelves[key];
            return (
              <option key={key} value={key}>
                {title}
              </option>
            );
          })}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onBookShelfChange: PropTypes.func.isRequired,
};

export default BookShelfChanger;
