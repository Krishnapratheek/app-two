import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;