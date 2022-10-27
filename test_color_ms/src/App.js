import './App.css';
//imports for microservice
import React, { useState } from 'react';
import axios from 'axios';
import ColorMS from './ColorMS';
// packages needed for web: axios

function App() {
  // Needed for microservice
  const [rgb, setRgb] = useState('');
  // to make post request to send user input to microservice
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/', {
      rgb,
    });
    // reset rgb value in user input
    setRgb('')
  };

  return (
    <div className="App">
      <header>Testing color micro service</header>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label>RGBcode</label>
            <input value={rgb} onChange={(e) => setRgb(e.target.value)} />
          </div>
          <button>Submit</button>
        </form>
      </div>
      <div>
        <ColorMS />
      </div>
    </div>
  );
}

export default App;
