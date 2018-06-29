import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import './app.css';


function App(){
  return (
    <div className='app-wrapper'>
      <p>Working</p>
      <Switch>
        {/* <Route exact path = '/' component={}/> */}
        <Route component={Error404}/>
      </Switch>
    </div>

  );
}

export default App;
