import React, { Component } from 'react';
import Botones from '../Botones/Botones';

class Descripcion  extends Component {
    
    constructor(props) {
        super(props);
        const nombreNormalizado = props.match.params.name;
        const guionIndex =  nombreNormalizado.indexOf('-');
        const fragmentoNombre = nombreNormalizado.slice(0, guionIndex);
        this.state = {
            url: `https://swapi.dev/api/people/?search=${fragmentoNombre}`,
            api: null,
            fragmentoNombre: fragmentoNombre
        }
    }

    async componentDidMount() {
      const api = await this.consultarApi();
      this.setState({ api: api.results[0] });
    }

    consultarApi = async () => {
      const respuesta = await fetch(this.state.url);
      const json = await respuesta.json();
      return json;
    }

    render() {
        if (this.state.api) {
            return (
                <div className="container mt-5">
                    <div className="card w-100 h-100">             
                    <div className="card-body text-center">
                        <p className="card-text">Nombre: {this.state.api.name} </p>
                        <p className="card-text">Año de nacimiento: {this.state.api.birth_year}  </p>
                        <p className="card-text">Genero: {this.state.api.gender}</p>
                        <p className="card-text">Color de cabello: {this.state.api.hair_color}</p>
                        <p className="card-text">Altura: {this.state.api.height}</p>                
                        <p className="card-text">Color de ojos: {this.state.api.eye_color}  </p>
                        <p className="card-text">Color de piel: {this.state.api.skin_color} </p>
                    </div>

                    <div className="container text-center m-2">
                        <Botones history={this.props.history} fragmentoNombre={this.state.fragmentoNombre} />
                    </div>
                    </div>
                </div>
            );
        }
        return null
    }
}

export default Descripcion;