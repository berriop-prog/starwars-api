import React from 'react';
import './Personaje.css'

const Personaje = ({ personaje: { name, birth_year }, history }) => {
   const nombreNormalizado = name.toLowerCase().replace(/[\s]/g, '-');
    return (
        <div className="contenedor-personajes">
            <div className="card w-100 h-100">             
             <div className="card-body text-center">
                <p className="card-text">Nombre: {name} </p>
                <p className="card-text">Año de nacimiento: {birth_year}</p>                
             </div>

            <div className="card-footer">
                <button onClick={() => history.push(`/personaje/${nombreNormalizado}`)}  className="btn btn-outline-warning btn-block">Ver más</button>
            </div>
            </div>
        </div>
    );
}

export default Personaje;