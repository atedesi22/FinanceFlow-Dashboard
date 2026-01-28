import { useState } from 'react'
import './index.css';
// import { Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
