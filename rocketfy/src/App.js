import React from 'react';

import GlobalStyle from './Styles/global';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <>
      <Header/>
      <Board/>
      <GlobalStyle/>
    </>
  );
}

export default App;
