import React from 'react';
import "../src/styles/navbar.css";
import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
export default App;