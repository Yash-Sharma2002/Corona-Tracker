import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/head/Header';
import ContextProvider from './context/Context';
import CasesByTime from './webpages/cases-by-time';
import Home from './webpages/home';
import Statewise from './webpages/statewise';
import Tested from './webpages/tested';
function App() {
  return (
    <ContextProvider>
      <Header />
      <BrowserRouter >
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cases-by-timeline' element={<CasesByTime />} />
          <Route exact path='/statewise' element={<Statewise />} />
          <Route exact path='/tested' element={<Tested />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
