import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Form from './Form';

function App() {
  return (
    <Router>
      <div id="app">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/order">Order</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
