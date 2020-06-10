import React from 'react';
import './Personaje.css'

const Personaje = ({personaje}) => {
    //se llaman las propiedades que se quieren mostrar sacadas el api
    const { name, gender, hair_color, height, birth_year, eye_color, skin_color} = personaje
    return (
        <div className="contenedor-personajes">
            <div className="card w-100 h-100">             
             <div className="card-body text-center">
                <p className="card-text">Nombre: {name} </p>
                <p className="card-text">Año de nacimiento: {birth_year}  </p>
                <p className="card-text">Genero: {gender}</p>
                <p className="card-text">Color de cabello: {hair_color}</p>
                <p className="card-text">Altura: {height}</p>                
                <p className="card-text">Color de ojos: {eye_color}  </p>
                <p className="card-text">Color de piel: {skin_color} </p>
             </div>
            </div>
        </div>
    );
}

export default Personaje;