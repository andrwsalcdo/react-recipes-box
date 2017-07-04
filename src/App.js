import React, { Component } from 'react';
import './App.css';

//child components 
  import RecipeBox from './Views/RecipeBox/RecipeBox.js';
  import Footer from './Components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
              <RecipeBox />
              <Footer /> 
      </div>
    );
  }
}

export default App;
