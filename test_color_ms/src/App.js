import './App.css';
//imports for microservice
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // Needed for microservice
  const [rgb, setRgb] = useState('');
  const [hex, setHex] = useState('');
  // Get request
  const fetchHex = async (event) => {
    event.preventDefault()
    const res = await axios.get(`http://localhost:4000?rgb=${rgb}`)
    setHex(res.data)
  };

  return (
    <div className="App">
      <header>Testing color micro service</header>
      <div>
        <form onSubmit={fetchHex}>
          <div>
            <label>RGBcode</label>
            <input value={rgb} onChange={(e) => setRgb(e.target.value)} />
          </div>
          <button>Submit</button>
        </form>
      </div>
      <div>
        <p>The hex code is: {hex}</p>
      </div>
    </div>
  );
}

export default App;
