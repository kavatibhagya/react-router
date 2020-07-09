import React from 'react';
import './App.css';
import About from './About';
import Posts from './Posts';
import Nav from './Nav';
import PostDetails from './PostDetails'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import RefComponent from './RefComponent';

function App() {
  return (
   
    <div className="App">
      <RefComponent/>
      <RefComponent/>
      <RefComponent/>
    </div>
    
  );
 
}
const Home = () => (
  <h1>Home Phase</h1>
);

export default App;
