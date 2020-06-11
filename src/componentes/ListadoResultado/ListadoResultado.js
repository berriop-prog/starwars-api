import React from 'react';
import Personaje from '../Personaje/Personaje';
import './ListadoResultado.css';

function ListadoResultado({ api=[], paginaActual=1, history }) {
    return (

        <div className="listado">
        {
            api && api.map ? (
                api.map((personaje, key) => {
                    if ((key >= (paginaActual * 9) - 9) && (key <= (paginaActual * 9) - 1)) {
                        return (
                            <Personaje key={key} personaje={personaje} history={history} />
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