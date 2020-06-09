import React from 'react';
import Personaje from './Personaje'

function ListadoResultado({imagenes}) {
    return (

        <div className="col-12 p-5 row">
        {imagenes.map(personaje => (
            <Personaje 
            key={personaje.id}
            personaje={personaje}
            />
        ))} 
        </div>
    )
}

export default ListadoResultado;