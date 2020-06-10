import React, { useState, useEffect } from 'react';
import Buscador from './componentes/Buscador';
import ListadoResultado from './componentes/ListadoResultado/ListadoResultado';
import './App.css';

const NUMERO_RESULTADOS_POR_VISTA = 9;

function App() {
  const [busqueda, guardarBusqueda] = useState('');
  const [api, guardarRespuestaApi] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);
  const [url, guardarUrl] = useState(`https://swapi.dev/api/people/`);

  useEffect(() => {
    const consultarApi = async () => {
      const respuesta = await fetch(url);
      const json = await respuesta.json();
      if (api.length < json.count) {
        guardarRespuestaApi([ ...api, ...json.results ]);
        guardarUrl(json.next);
      }
      //calcular total de paginas
      const calcularTotalPaginas = Math.ceil(
        json.count / NUMERO_RESULTADOS_POR_VISTA
      );
      guardarTotalPaginas(calcularTotalPaginas);
      //Mover la pantalla hacia la parte de arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: "smooth", block: "end"});
    }
    consultarApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busqueda, paginaActual]);

  const paginaAnterior = () => {
    console.log('paginaAnterior');
    let nuevaPaginaActual = paginaActual - 1;
    guardarPaginaActual(nuevaPaginaActual);
  };

  const paginaSiguiente = () => {
    console.log('paginaSiguiente');
    let nuevaPaginaActual = paginaActual + 1;
    guardarPaginaActual(nuevaPaginaActual);
  };
  console.log(paginaActual);
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador</p>
        <Buscador guardarBusqueda={guardarBusqueda} />
      </div>
      <div>
        <ListadoResultado api={api} paginaActual={paginaActual} />
      </div>
      <div className="row justify-content-center">

        {paginaActual === 1 ? (
          <button type="button"
            className="btn btn-outline-warning">
            &laquo; Anterior{' '}
          </button>
        ) : (
          <button onClick={paginaAnterior}
            type="button"
            className="btn btn-outline-warning">
            &laquo; Anterior{' '}
          </button>
        )}
        <div className="pagina-actual">
          <span>{paginaActual}</span>
        </div>
        {paginaActual < totalPaginas ? (
          <button onClick={paginaSiguiente}
            type="button"
            className="btn btn-outline-warning">
            Siguiente &raquo;
          </button>
        ) : (
          <button type="button"
            className="btn btn-outline-warning">
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
