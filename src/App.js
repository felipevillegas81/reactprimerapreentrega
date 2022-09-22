import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div id="1" className="App">
      <Navbar />
      <ItemListContainer saludo={'Bienvenidos a Optimax'}/>
    </div>
  );
}

export default App;
