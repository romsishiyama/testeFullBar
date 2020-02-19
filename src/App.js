import React from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import { Switch, Route } from 'react-router-dom';
import './App.css';


function App () {
  return (
    <div>   
    <Switch>
      <div>
        <Route exact path='/' component={Formulario} />
        <Route path='/lista' component={Formulario} />
      
      </div>
    </Switch>
    </div>
  )
}

export default App;