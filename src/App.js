import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import { Route, Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
    </div>
  );
}

export default App;
