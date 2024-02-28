// App.js
import React from 'react';
import StoreItems from './components/StoreItems';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <StoreItems />
      <Footer />
    </div>
  );
}

export default App;
