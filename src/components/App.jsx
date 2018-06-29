import React from 'react';
import Error404 from './Error404';
import Header from './Header';
import Welcome from './Welcome';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import './app.css';


function App(){
  return (
    <div className='app-wrapper'>
      <Header/>
      <Switch>
        <Route exact path = '/' component={Welcome}/>
        <Route exact path = '/kegs/new' component={NewKegForm}/>
        <Route exact path = '/kegs' component={KegList}/>
        <Route component={Error404}/>
      </Switch>
    </div>

  );
}

export default App;
