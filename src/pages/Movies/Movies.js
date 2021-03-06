import React from "react";
import axios from "axios";
import {Container, ContainerPoster, Pesquisa, Porters} from '../../Components/config/Styles/PageStyle'
import GlobalStyle from "../../Components/config/Styles/GloblaStyle";

const apiFilmes = axios.create ({
        baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=4305dab7131983fa38daf8a784e7ebd2&language=pt-br&page=1',
    });


        export default class Movies extends React.Component {
            state = {
              listFilmes: [],
              resultfilms: []
            };
          
            componentDidMount() {
              this.getFilmes()
            }
          
            getFilmes = async () => {
              const response = await apiFilmes.get();  
              const filmes = response.data.results.map((item) => {
                return {
                  ...item,
                  poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                };
              });
          console.log(filmes)
              this.setState({
                listFilmes: filmes,
                resultfilms: filmes    
              });
            }
          
          
            buscarFilmes = (event) => {
              let {listFilmes} = this.state
          
              const filmesFiltrados = listFilmes.filter((item) => {
                if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
                  return true
                }
              })
              // console.log(event.target.value)
          
              this.setState({
                resultfilms: filmesFiltrados
              })
            }
          
            render() {
              return (
                <Container>
                  <GlobalStyle/>
                  <Pesquisa>
                  <h1>Filmes</h1> 
                  <input type="text" placeholder="Buscar filme..." 
                  onChange={this.buscarFilmes}
                  />  
                  </Pesquisa>    

                  <ContainerPoster>
                  {this.state.resultfilms.map((item) => (
                    <Porters>
                      <ul>
                      <li>
                        <h5>{item.title}</h5>
                        <img src={item.poster_path} alt="" />
                        
                      </li>
                      </ul>
                    </Porters>
                  ))}
                  </ContainerPoster> 
                </Container>
              );
            }
          }