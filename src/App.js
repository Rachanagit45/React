import React from 'react';
import "../src/styles/navbar.css";
import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer.jsx';



function App() {
  return (
    <div className="App">
      <Outlet />
      <Footer/>
    </div>
  );
}
export default App;