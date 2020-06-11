import React, { Component } from 'react';

class Botones extends Component {
  state = {
    likeIt: '',
    dontLike: ''
  };
  
  componentDidMount() {
    const likeIt = localStorage.getItem('likeIt');
    const dontLike = localStorage.getItem('dontLike') ;
    this.setState({ likeIt, dontLike });
  }

  componentDidUpdate() {
    const { likeIt, dontLike } = this.state;
    localStorage.setItem('likeIt', likeIt);
    localStorage.setItem('dontLike', dontLike);
  };

  render() {
    return (
      <div className="container text-center">
        <button type="button" onClick={this.state.likeIt} className="btn btn-outline-warning m-2">
          Me gusta
        </button>
        <button type="button" onClick={this.state.dontLike} className="btn btn-outline-danger m-2">
          No me gusta
        </button>
      </div>
    );
  }
}

export default Botones;
