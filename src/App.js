import React from 'react';
import { Router } from '@reach/router';
import logo from './logo.svg';
import './App.css';

import Context from 'context';

import Index from 'views/Index';
import NotFound from 'views/NotFound';
import Category from 'views/Category';
import List from 'views/List';
import Entry from 'views/Entry';

function App() {
  return (
    <Context.Provider value={{}}>
      <Router>
        <Index path="/">
          <Category path=":category">
            <List path="/" />
            <Entry path=":id" />
          </Category>
        </Index>

        <NotFound default />
      </Router>
    </Context.Provider>
  );
}

export default App;
