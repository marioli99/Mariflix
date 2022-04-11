import React from "react";
import { Container } from "./styled";
import Carousel from 'react-elastic-carousel'
import MoviesSlides from "../slides/slideMovies";




export default class App extends React.Component{
   

    render (){
        return(
            <Container>
            <h1>Bem vindes ao Mariflix </h1>
           <MoviesSlides/>
  
            </Container>
        )
    }
}