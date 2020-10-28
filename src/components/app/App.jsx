import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterPage from '../../pages/CharacterPage';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterPage} />
      </Switch>
    </Router>
  );
}
