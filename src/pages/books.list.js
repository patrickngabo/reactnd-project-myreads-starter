import React, { Component } from 'react';
import { FAB } from '../components/fab';
import { Header } from '../components/header';
import { Shelf } from '../components/shelf';

export class BookList extends Component {
  render() {
    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <div>
            <Shelf />
            <Shelf />
            <Shelf />
          </div>
        </div>
        <FAB />
      </div>
    );
  }
}
