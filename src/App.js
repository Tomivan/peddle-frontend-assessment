import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Github from './pages/github/github';
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/homepage" component={Homepage}></Route>
          <Route path="/github" component={Github}></Route>          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
