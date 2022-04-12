import React from "react";
import axios from "axios";
import styled from "styled-components"
import Carousel from "react-elastic-carousel";


const apiFilmes =  axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=4305dab7131983fa38daf8a784e7ebd2&'
});

const CarouselMovies = styled(Carousel)`
  background-color: black;
`;



export default class MoviesSlides extends React.Component{
state ={
    movies:[]
}

componentDidMount(){
this.getMovies()
}

getMovies = async () => {
    const response = await apiFilmes.get() 
    const filmes = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      };
    });

   this.setState ({
       movies:filmes
   })

}

    render(){
        return(
           <CarouselMovies enableAutoPlay autoPlaySpeed={3000} itemsToShow={5}>
               {this.state.movies.map((item) =>(
                   <img src={item.poster_path} alt={item.title}/>
               ))}
           </CarouselMovies>
        )
    }
}