import React, { Component } from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Navigator from './Navigator';
import Articles from './Articles';
import ArticleN1 from './ArticleN1';
import ArticleN2 from './ArticleN2';

class App extends Component {
  

  render() {
    
    return (
      <div className="App">
        <Navigator />
        <Router>
        <div className="main">
        <Route exact path="/" component={Articles}/>
        <Route exact path="/when-i-started" component={ArticleN1}/>
        <Route exact path="/under-the-hood-javascript-runned" component={ArticleN2}/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
