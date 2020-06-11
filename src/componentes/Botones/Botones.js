import React, { Component } from 'react';

class Botones extends Component {

  constructor(props) {
    super(props);
    this.state = {
      like: localStorage.getItem(`like${props.fragmentoNombre}`),
      disLike: localStorage.getItem(`disLike${props.fragmentoNombre}`)
    };
  }  

  preferenciaUsuario = (preferencia) => {
    if (preferencia === 'like') {
      if (this.state.like === 'true') {
        this.setState({ like: 'false' });
        localStorage.setItem(`like${this.props.fragmentoNombre}`, false);
      } else {
        this.setState({ like: 'true', disLike: 'false' });
        localStorage.setItem(`like${this.props.fragmentoNombre}`, true);
        localStorage.setItem(`disLike${this.props.fragmentoNombre}`, false);
      }
    } else {
      if (this.state.disLike === 'true') {
        this.setState({ disLike: 'false' });
        localStorage.setItem(`disLike${this.props.fragmentoNombre}`, false);
      } else {        
        this.setState({ like: 'false', disLike: 'true' });
        localStorage.setItem(`like${this.props.fragmentoNombre}`, false);
        localStorage.setItem(`disLike${this.props.fragmentoNombre}`, true);
      }
    }
  }

  render() {
    return (
      <div className="container text-center">
        <button type="button" onClick={() => this.preferenciaUsuario('like')} 
          className={`btn ${(this.state.like === 'true') ? 'btn-primary' : 'btn-outline-primary'} m-2`}>
          Me gusta
        </button>
        <button type="button" onClick={() => this.props.history.push('/')} 
          className={`btn btn-outline-warning m-2`}>
          Volver
        </button>
        <button type="button" onClick={() => this.preferenciaUsuario('disLike')} 
          className={`btn ${(this.state.disLike === 'true') ? 'btn-danger' : 'btn-outline-danger'} m-2`}>
          No me gusta
        </button>
      </div>
    );
  }
}

export default Botones;
