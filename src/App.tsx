import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import { Grid } from '@material-ui/core'
import './App.css';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';


function App() {
  return (
    <Router>
      <Navbar />
        <div>
        <Routes>
        <Route path='/'>
            <Login />
          </Route>
        <Route path='/login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
