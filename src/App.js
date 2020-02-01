import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import {BrowserRouter,} from 'react-router-dom'
import Router from './Router'
// Write imports for Router & BrowserRouter here //


//Imporitng <Router> into App.js. Importing <BrowserRouter> as well.
function App() {
  return (
  <BrowserRouter>
    <Navigation />
    <Router />
  </BrowserRouter>
  );
}

export default App; 
