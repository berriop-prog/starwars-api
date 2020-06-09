import React from 'react';

const Personaje = ({personaje}) => {

    console.log(personaje);

    //se llaman las propiedades que se quieren mostrar sacadas el api
    const { largeImageURL, likes, previewURL, tags} = personaje
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
             <img src={previewURL} alt ={tags} className="card-img-top" />
             <div className="card-body">
                <p className="card-text">{likes} Me gusta</p>
                <p className="card-text">{tags} No me gusta</p>
             </div>

             <div className="card-footer">
                <a  href={largeImageURL}  target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning btn-block"> Ver más</a>
             </div>
            </div>
        </div>
    );
}

export default Personaje;