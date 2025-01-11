import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Layouts/Home';
import LayoutDefault from './Layouts/LayoutDefault';
import ListSpace from './Layouts/ListSpace';
import AboutUs from './Layouts/AboutUs';
import Contact from './Layouts/Contact';
import Space from './Layouts/Space';
import User from './Layouts/User';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/listspace" element={<ListSpace />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/space/:prop" element={<Space />} />
        <Route path="/user/:prop" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
