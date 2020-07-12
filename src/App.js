import React from 'react';
import './App.css';
// import About from './About';
// import Posts from './Posts';
// import Nav from './Nav';
// import PostDetails from './PostDetails'
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import RefComponent from './RefComponent';

import { AppProvider } from './AppProvider';
import Red from './Red';
function App() {
  return (
    <AppProvider>
      <div className="red">
      <Red/>
      </div>
    
    </AppProvider>
    
  );
 
}
// const Home = () => (
//   <h1>Home Phase</h1>
// );

export default App;
