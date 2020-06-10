import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Buscador from './componentes/Buscador';
import ListadoResultado from './componentes/ListadoResultado/ListadoResultado';
import Personaje from './componentes/Personaje/Personaje';
import Descripcion from './componentes/Descripcion/Descripcion'
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/" component={Buscador} />
        <Route exact path="/" component={ListadoResultado} />
        <Route exact path="/" component={Personaje} />
        <Route exact path="/personaje" component={Descripcion} />
      </Switch>
    </div>
  );
};

export default App;
