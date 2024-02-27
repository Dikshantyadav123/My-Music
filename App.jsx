// App.jsx
// app.jsx

import React, { useState } from 'react';
import './app.css';

function App() {
  const [userNumber, setUserNumber] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [connectedUsers, setConnectedUsers] = useState([]);

  const handleNumberChange = (event) => {
    setUserNumber(event.target.value);
  };

  const handleVerification = () => {
    // Verify user number logic here (placeholder for actual implementation)
    // For demonstration, let's assume any number is verified
    setIsVerified(true);
    setConnectedUsers([...connectedUsers, userNumber]);
  };

  return (
    <div className="App">
      <h1>Library WiFi Management</h1>
      {!isVerified ? (
        <div>
          <input
            type="text"
            value={userNumber}
            onChange={handleNumberChange}
            placeholder="Enter your number"
          />
          <button onClick={handleVerification}>Verify</button>
        </div>
      ) : (
        <div>
          <p>You are connected to the library WiFi.</p>
          <p>Connected Users: {connectedUsers.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;
