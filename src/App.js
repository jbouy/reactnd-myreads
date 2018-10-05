import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import * as BooksAPI from './util/BooksAPI';
import './App.css';
import BookShelvesScreen from './screens/BookShelvesScreen';
import SearchScreen from './screens/SearchScreen';
import Shelves from './shelves';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  updateBook = bookToUpdate => {
    if (!bookToUpdate) return;

    if (!Shelves[bookToUpdate.shelf]) {
      this.setState(prev => ({books: prev.books.filter(book => book.id !== bookToUpdate.id)}));
      return;
    }

    let books = this.state.books.map(book => {
      if (book.id === bookToUpdate.id) return bookToUpdate;
      return book;
    });

    const existing = books.find(x => x.id === bookToUpdate.id);

    if (!existing) {
      books.push(bookToUpdate);
    }

    this.setState({books});
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }

  render() {
    const {books} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={() => <BookShelvesScreen books={books} onBookShelfChange={this.updateBook} />}
            exact
          />
          <Route
            path="/search"
            render={() => <SearchScreen books={books} onBookShelfChange={this.updateBook} />}
            exact
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
