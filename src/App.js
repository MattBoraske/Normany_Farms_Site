import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Calendar from './components/Calendar';
import ContactUs from './components/ContactUs';
import Donations from './components/Donations';
import Payments from './components/Payments';
import Volunteer from './components/Volunteer';
import WhatWeDo from './components/WhatWeDo';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
