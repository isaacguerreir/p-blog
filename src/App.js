import React, { Component } from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Navigator from './components/Navigator';
import Articles from './components/Articles';
import ArticleN1 from './articles/ArticleN1';
import ArticleN2 from './articles/ArticleN2';
import ArticlesN3 from './articles/ArticleN3';

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
        <Route exact path="/100words-day1" component={ArticlesN3}/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
