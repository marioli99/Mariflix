import React from "react";
import axios from "axios";
import styled from "styled-components"
import Carousel from "nuka-carousel";


const apiSeries =  axios.create({
    baseURL:'https://api.themoviedb.org/3/tv/popular?api_key=4305dab7131983fa38daf8a784e7ebd2&language=pt-br&page=1'
});

const CarouselSeries = styled(Carousel)`
  background-color: black;
`;



export default class SeriesSlides extends React.Component{
state ={
    series:[]
}

componentDidMount(){
this.getMovies()
}

getMovies = async () => {
    const responseShow = await apiSeries.get() 
    const show = responseShow.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      };
    });

   this.setState ({
       series:show
   })

}

    render(){
        return(
           <CarouselSeries 
            autoplay = {true} 
            speed={2000}
            wrapAround={true}
            slidesToShow={5}
            defaultControlsConfig={{
                nextButtonText: '>',
                prevButtonText: '<',
                pagingDotsStyle: {
                  fill: 'none',
                },
              }}
           >
               {this.state.series.map((item) =>(
                   <img src={item.poster_path} alt={item.title}/>
               ))}
           </CarouselSeries>
        )
    }
}