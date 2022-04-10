
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { GlobalStyle } from './style/stylePage';
import Movies from './pages/Movies';
import Series from './pages/Series';



export default class App extends React.Component{

  render(){
    return(
      <Router>
        <GlobalStyle/>
        <nav>
          <ul>
          <li> <Link to="/" >Movies</Link> </li>
          <li> <Link to="/Series" >Series</Link></li>
        </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Movies/>} />
          <Route path="/Series" element={<Series/>} />
        </Routes>
      </Router>
    )
  }
  
}