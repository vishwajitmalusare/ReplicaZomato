import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render () {

    return(
    
    <div>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/login' exact component={Login} />
      </Router>
    </div>  
    );
  }
}

export default App;
