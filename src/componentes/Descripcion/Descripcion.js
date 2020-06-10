import React from 'react';

const Descripcion = ({name, gender, hair_color, height, birth_year, eye_color, skin_color }) => {
    
    return (
        <div className="container">
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

             <div className="container text-center m-2">
                <button type="button" class="btn btn-outline-warning">Me gusta</button>        
                <button type="button" class="btn btn-outline-danger">No me gusta</button>
             </div>
            </div>
        </div>
    );
}

export default Descripcion;