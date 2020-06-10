import React from 'react';
import './Personaje.css'

const Personaje = ({name, birth_year }) => {
    //se llaman las propiedades que se quieren mostrar sacadas el api
   
    return (
        <div className="contenedor-personajes">
            <div className="card w-100 h-100">             
             <div className="card-body text-center">
                <p className="card-text">Nombre: {name} </p>
                <p className="card-text">Año de nacimiento: {birth_year}</p>                
             </div>

            <div className="card-footer">
                <a href="/personaje"  className="btn btn-outline-warning btn-block">Ver más</a>
            </div>

            </div>
        </div>
    );
}

export default Personaje;