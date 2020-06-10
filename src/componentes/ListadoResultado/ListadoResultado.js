import React from 'react';
import Personaje from '../Personaje/Personaje';
import './ListadoResultado.css';

function ListadoResultado({ api=[], paginaActual=1 }) {
    return (

        <div className="listado">
        {
            api && api.map ? (
                api.map((personaje, key) => {
                    console.log('hola');
                    if ((key >= (paginaActual * 9) - 9) && (key <= (paginaActual * 9) - 1)) {
                        return (
                            <Personaje key={key} personaje={personaje} />
                        );
                    }
                    return null;
                })
            ) : null
        } 
        </div>
    )
}

export default ListadoResultado;