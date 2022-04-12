import React from "react";
import { Container } from "./styled";
import MoviesSlides from "../slides/slideMovies";
import SeriesSlides from "../slides/slideSeries";
import GlobalStyle from "../../Components/config/Styles/GloblaStyle";




export default class App extends React.Component{
   

    render (){
        return(
            <Container>
            <GlobalStyle/>
            <h1>Bem vindes ao Mariflix </h1>
           <MoviesSlides/>
           <SeriesSlides/>
           
  
            </Container>
        )
    }
}