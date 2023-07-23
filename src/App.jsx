import React from 'react';
import Navbar from './Navbar/navbar';
import Sidebar from './Sidebar/sidebar';
import Footer from './Footer/footer';
import Home from './home/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
    <Navbar></Navbar>
    <Footer></Footer>
    </div>
  );
}

export default App;
