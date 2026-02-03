import { useState } from 'react'
import './index.css';
// import { Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dasboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Transactions from './pages/Tansactions';
import DashboardLayout from './layouts/DashboardLayout';
import Transfert from './pages/Transfer';
import Profile from './pages/Profile';
import NovaWallet from './components/NovaWallet';
import Stats from './pages/Stats';
import NovaHub from './pages/NovaHub';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<DashboardLayout/>}>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/wallet" element={<NovaWallet />} />
            <Route path='/transactions' element={<Transactions/>}/>
            <Route path="/transfert" element={<Transfert />} />
            <Route path="/transfert/:contactName" element={<Transfert />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/stats" element={<Stats />} />
            <Route path='/hub' element={<NovaHub/>}/>
          </Route>
          
          {/* Redirection si la page n'existe pas */}
          <Route path="*" element={<Navigate to='/'/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
