
import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Home from './pages/Home/Home';
import styled from 'styled-components';

const MenuNav = styled.nav`
width: 100%;
height:10vh;
display:flex;
justify-content:center;
align-items: center;
 background-color: #c4c4c4;
 
`

const Menu = styled.ul`
width: 300px;
display: flex;
justify-content: space-between;
list-style: none;

`;

export default class App extends React.Component{

  render(){
    return(
      <Router>
        
        <MenuNav>
          <Menu>
          <li> <Link to="/" >Home</Link> </li>
          <li> <Link to="/Movies" >Movies</Link> </li>
          <li> <Link to="/Series" >Series</Link></li>
        </Menu>
        </MenuNav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Series" element={<Series/>} />
        </Routes>
       
      </Router>
    )
  }
  
}