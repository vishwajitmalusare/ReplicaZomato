import React from 'react';
import HeaderElement from '../components/Header.js';
import HomeFooter from '../components/HomeFooter.js';
import CardOption from '../components/CardOption';

class Home extends React.Component {
  render () {

    return(
    
    <div>
        <HeaderElement></HeaderElement>
        <CardOption></CardOption>
        <HomeFooter></HomeFooter>
    </div>  
    );
  }
}

export default Home;