import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  
  } from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';

const App = () => {
    
    return (
        <Router>
           <Navigation></Navigation>
           <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/auth" exact component={Auth}/>
                

           </Switch>
           
        </Router>
    );
};

export default App;