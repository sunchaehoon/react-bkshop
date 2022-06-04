import React from 'react';
import './App.css';
import Main from './Main/Main';
import Login from './components/Login/Login';
import Frame from './components/Frame/Frame';
import Parts from './components/Parts/Parts';
import Finished from './components/Finished/Finished';
import Others from './components/Otherthings/Others';
import { Routes, Route } from 'react-router-dom';
import Myinfo from './components/Myinfo/Myinfo';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/frame" element={<Frame />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/finished" element={<Finished />} />
        <Route path="/others" element={<Others />} />
        <Route path="/myinfo" element={<Myinfo />} />
        <Route path="*" element={<h1>404 ERROR</h1>} />
      </Routes>
    </>
  );
}

export default App;
