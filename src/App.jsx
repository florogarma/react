import React from 'react';
import { useState } from 'react';
import { NavBar } from './components/navBar';
import { ItemListContainer } from './components/ItemListContainer';

import "./App.css"

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido!"/>
    </>
  )
}

export default App
