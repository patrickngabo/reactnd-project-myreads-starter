import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import { PageNotFound } from './components/pageNotFound';
import { BookList } from './pages/books.list';
import { Search } from './pages/search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={BookList} />
            <Route exact path={'/search'} component={Search} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
