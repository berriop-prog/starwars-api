import React, { useState, useEffect } from 'react';
import Buscador from './componentes/Buscador';
import ListadoResultado from './componentes/ListadoResultado';
import './App.css';

function App() {
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') return;

      const imagenesPorPagina = 9;
      
      const key = '16964000-7d0ef75ee9223b8294f655428';

      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page={paginaActual}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado);
      guardarImagenes(resultado.hits);

      //calcular total de paginas
      const calcularTotalPaginas = Math.ceil(
        resultado.totalHits / imagenesPorPagina
      );
      guardarTotalPaginas(calcularTotalPaginas);

      //Mover la pantalla hacia la parte de arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: "smooth", block: "end"});
    };
    consultarApi();
  }, [busqueda, paginaActual]);

  const paginaAnterior = () => {
    let nuevaPaginaActual = paginaActual - 1;

    //en el state
    guardarPaginaActual(nuevaPaginaActual);
  };
  const paginaSiguiente = () => {
    let nuevaPaginaActual = paginaActual + 1;

    //en el state
    guardarPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador</p>
        <Buscador guardarBusqueda={guardarBusqueda} />
      </div>

      <div className="row justify-content-center">
        <ListadoResultado imagenes={imagenes} />

        {paginaActual === 1 ? null : (
          <button
            onClick={paginaAnterior}
            type="button"
            className="btn btn-outline-warning mr-1"
          >
            &laquo; Anterior{' '}
          </button>
        )}

        {paginaActual === totalPaginas ? null : (
          <button
            onClick={paginaSiguiente}
            type="button"
            className="btn btn-outline-warning"
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
