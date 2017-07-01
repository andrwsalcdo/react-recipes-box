import React, { Component } from 'react';
import './App.css';

//child components 
  // import Header from './components/Header/Header'; 
  import RecipeBox from './Views/RecipeBox/RecipeBox.js';
  // import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
          {/*<Header />*/}
          <RecipeBox />
          {/*<Footer /> */}
      </div>
    );
  }
}

export default App;
