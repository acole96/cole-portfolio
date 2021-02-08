import React, { Component } from 'react';
import {NavLink,Switch,Route} from 'react-router-dom';
import {Navigation} from '../Navigation/Navigation';
import {About} from '../About/About';
import {Projects} from '../Projects/Projects';
import {NotFound} from '../NotFound/NotFound';
import './App.css'

class App extends Component {
render(){
   return (
      <article className="App">

      <Navigation/>

      <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route component={NotFound}/>
      </Switch>

      </article>
    )
}
}
export {
  App
}