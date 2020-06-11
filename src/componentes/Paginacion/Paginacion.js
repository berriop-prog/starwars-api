import React from 'react';

function Paginacion({ state, paginaAnterior, paginaSiguiente }) {
    return (
        <div className="row justify-content-center mt-4">
          {state.paginaActual === 1 ? (
            <button type="button" className="btn btn-outline-warning">
              &laquo; Anterior{' '}
            </button>
          ) : (
            <button
              onClick={paginaAnterior}
              type="button"
              className="btn btn-outline-warning"
            >
              &laquo; Anterior{' '}
            </button>
          )}
          <div className="pagina-actual">
            <span>
              {state.paginaActual}/{state.totalPaginas}
            </span>
          </div>
          {state.paginaActual < state.totalPaginas ? (
            <button
              onClick={paginaSiguiente}
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
    );
}

export default Paginacion;