
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Home from './pages/Home/Home';




export default class App extends React.Component{

  render(){
    return(
      <Router>
        
        <nav>
          <ul>
          <li> <Link to="/" >Home</Link> </li>
          <li> <Link to="/Movies" >Movies</Link> </li>
          <li> <Link to="/Series" >Series</Link></li>
        </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Series" element={<Series/>} />
        </Routes>
       
      </Router>
    )
  }
  
}