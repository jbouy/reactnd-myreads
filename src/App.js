import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import * as BooksAPI from './util/BooksAPI';
import './App.css';
import BookShelvesScreen from './screens/BookShelvesScreen';
import SearchScreen from './screens/SearchScreen';

class BooksApp extends React.Component {
  state = {
    books: [],
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
          <Route path="/" render={() => <BookShelvesScreen books={books} />} exact />
          <Route path="/search" render={() => <SearchScreen books={books} />} exact />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
