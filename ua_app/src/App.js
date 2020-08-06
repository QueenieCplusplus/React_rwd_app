// 2020, 8/06, pm 11:45

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserAgent } from 'react-useragent';

function App() {

  const UA = UserAgent;

  return (
    <div className="App">
      <header className="App-header">

        <UA>

          { ({ua})=> { return ua.mobile ? <p> I am touchable input used mobile device </p>: <p> I am for web browser only</p>} }

        </UA>
        
      </header>
    </div>
  );
}

export default App;
