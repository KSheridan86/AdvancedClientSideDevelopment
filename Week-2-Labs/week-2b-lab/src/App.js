import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import SplashScreen from './SplashScreen';
import ShoppingList from './ShoppingList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shopping-list">Shopping List</Link>
            </li>
          </ul>
        </nav>
        <hr></hr>

        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
        </Routes>

      </div>
    </Router>
  );
};



export default App;
