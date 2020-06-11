import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Descripcion from './componentes/Descripcion/Descripcion'
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/personaje/:name" component={Descripcion} />
      </Switch>
    </div>
  );
};

export default App;
