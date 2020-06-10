import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import ListadoResultado from './componentes/ListadoResultado/ListadoResultado';

const NUMERO_RESULTADOS_POR_VISTA = 9;

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: '',
      api: [],
      paginaActual: 1,
      totalPaginas: 1,
      url: 'https://swapi.dev/api/people/',
      totalPersonajes: 0,
      name: '',
      birth_year: '',
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
  };

  paginaAnterior = async () => {
    let nuevaPaginaActual = this.state.paginaActual - 1;
    this.setState({ paginaActual: nuevaPaginaActual });
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

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
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador</p>
          <Buscador guardarBusqueda={(e) => this.setState(e)} />
        </div>
        <div>
          <ListadoResultado
            api={this.state.api}
            paginaActual={this.state.paginaActual}
            name={this.state.name}
            birth_year={this.state.birth_year}
          />
        </div>        
        <div className="row justify-content-center">
          {this.state.paginaActual === 1 ? (
            <button type="button" className="btn btn-outline-warning">
              &laquo; Anterior{' '}
            </button>
          ) : (
            <button
              onClick={this.paginaAnterior}
              type="button"
              className="btn btn-outline-warning"
            >
              &laquo; Anterior{' '}
            </button>
          )}
          <div className="pagina-actual">
            <span>
              {this.state.paginaActual}/{this.state.totalPaginas}
            </span>
          </div>
          {this.state.paginaActual < this.state.totalPaginas ? (
            <button
              onClick={this.paginaSiguiente}
              type="button"
              className="btn btn-outline-warning"
            >
              Siguiente &raquo;
            </button>
          ) : (
            <button type="button" className="btn btn-outline-warning">
              Siguiente &raquo;
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Inicio;
