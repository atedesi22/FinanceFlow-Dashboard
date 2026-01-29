import { useState } from 'react'
import './index.css';
// import { Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dasboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Transactions from './pages/Tansactions';
import DashboardLayout from './layouts/DashboardLayout';
import Transfert from './pages/Transfer';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<DashboardLayout/>}>
            <Route path="/" element={<Dashboard/>} />
            <Route path='transactions' element={<Transactions/>}/>
            <Route path="transfer" element={<Transfert />} />
          </Route>
          
          {/* Redirection si la page n'existe pas */}
          <Route path="*" element={<Navigate to='/'/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
