import React, { useState } from 'react';
import Error from './Error';

function Buscador({ guardarBusqueda }) {
  const [terminoBusqueda, guardarTerminoBusqueda] = useState('');
  const [error, guardarError] = useState(false);

  const buscarPersonaje = (e) => {
    e.preventDefault();

    if (terminoBusqueda === '') {
      guardarError(true);
      return;
    }

    guardarError(false);
    guardarBusqueda(terminoBusqueda);
  };

  return (
    <form onSubmit={buscarPersonaje}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Nombre del personaje"
            onChange={(e) => guardarTerminoBusqueda(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-outline-warning btn-block"
            value="Buscar"
          />
        </div>
      </div>

      {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
    </form>
  );
}

export default Buscador;
