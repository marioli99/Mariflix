import React from "react";
import axios from "axios";
import PageStyle, { Container, ContainerPoster, Pesquisa, Porters } from "../../Components/config/Styles/PageStyle"
import GlobalStyle from "../../Components/config/Styles/GloblaStyle";



const apiSeries = axios.create({
    baseURL:'https://api.themoviedb.org/3/tv/popular?api_key=4305dab7131983fa38daf8a784e7ebd2&language=pt-br&page=1',
});

export default class Series extends React.Component {
  state = {
    listSeries: [],
    filtroBusca:[]
  };

  componentDidMount() {
    this.getSeries()
  }
  
  getSeries = async () => {
    const responseTv = await apiSeries.get();  
    const series = responseTv.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      };
    });

    this.setState({
      listSeries: series,
      filtroBusca:series
    });    
  }

  buscarSeries = (event) => {
    let {listSeries} = this.state

    const seriesFiltradas = listSeries.filter((item) => {
      if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
        return true;
      }
    })

    this.setState({
      filtroBusca: seriesFiltradas
    })   
  }

  render() {
    return (
      <Container>
        <GlobalStyle/>
        <Pesquisa>
        <h1>Series</h1>
        <input onChange={this.buscarSeries}
        type="text"
        placeholder="Buscar serie..."
        />
        </Pesquisa>
        <ContainerPoster>
        {this.state.filtroBusca.map((item) => (
          <Porters>
            <h5>{item.name}</h5>
            <img src={item.poster_path} alt="" />
          </Porters>
        ))}</ContainerPoster>
      </Container>
    );
  }
}