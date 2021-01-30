import React from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import './App.css';


//Components import
import {Header} from './components/header/header.component';
import {Homepage} from './pages/homepage/homepage.component';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
        </Switch>
      </div>
      );
  }
}

export default App;
