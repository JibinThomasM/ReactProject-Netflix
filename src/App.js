import React from 'react';
import NavBar from './components/navBar/NavBar'
import {action,originals} from './urls'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost'
import './App.css'


function App() {
  return (
    <div className="app">
       <NavBar/>
       <Banner/>
       <RowPost url={originals} title='Netflix Originals'/>
       <RowPost url={action} title='Action' isSmall/>
       
    </div>
  );
}

export default App;