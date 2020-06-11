import React, { Component } from 'react';
import ListadoResultado from './componentes/ListadoResultado/ListadoResultado';
import Paginacion from './componentes/Paginacion/Paginacion';

const NUMERO_RESULTADOS_POR_VISTA = 9;

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      paginaActual: 1,
      totalPaginas: 1,
      url: 'https://swapi.dev/api/people/',
      totalPersonajes: 0,
    };
  }

  async componentDidMount() {
    const api = await this.consultarApi();
    //calcular total de paginas
    const calcularTotalPaginas = Math.ceil(
      api.count / NUMERO_RESULTADOS_POR_VISTA
    );
    this.setState({
      api: api.results,
      url: api.next,
      totalPaginas: calcularTotalPaginas,
      totalPersonajes: api.count,
    });
    //Mover la pantalla hacia la parte de arriba
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  consultarApi = async () => {
    const respuesta = await fetch(this.state.url);
    const json = await respuesta.json();
    return json;
  }

  paginaAnterior = async () => {
    let nuevaPaginaActual = this.state.paginaActual - 1;
    this.setState({ paginaActual: nuevaPaginaActual });
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  paginaSiguiente = async () => {
    let nuevaPaginaActual = this.state.paginaActual + 1;
    if (this.state.api.length === this.state.totalPersonajes) {
      this.setState({ paginaActual: nuevaPaginaActual });
    } else {
      const api = await this.consultarApi();
      this.setState({
        api: [...this.state.api, ...api.results],
        url: api.next,
        paginaActual: nuevaPaginaActual,
      });
    }
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron text-center">
            <h1>Visor de StarWars</h1>
        </div>
        <div>
          <ListadoResultado
            api={this.state.api}
            paginaActual={this.state.paginaActual}
            history={this.props.history} />          
        </div> 
        <Paginacion state={this.state} paginaAnterior={this.paginaAnterior} paginaSiguiente={this.paginaSiguiente} />       
   
      </div>
    );
  }
}

export default Inicio;
