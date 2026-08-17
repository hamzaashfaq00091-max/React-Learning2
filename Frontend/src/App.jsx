// frontend/src/App.js
import React, { useState } from 'react';

function App() {
  // State for the form input
  const [name, setName] = useState('');
  
  // State for the response from Express
  const [responseMessage, setResponseMessage] = useState('');
  
  // State for loading
  const [loading, setLoading] = useState(false);

  // This function runs when you submit the form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops the page from refreshing
    
    setLoading(true);
    setResponseMessage('');
    
    try {
      // Send the name to Express
      const response = await fetch('http://localhost:5000/api/sayhello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }) // Send the name
      });
      
      // Get the response from Express
      const data = await response.json();
      
      // Update the UI with the response
      setResponseMessage(data.message);
      
    } catch (error) {
      setResponseMessage('❌ Error: Is your backend running?');
    }
    
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Simple Form + Backend Example</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
        />
        
        <button 
          type="submit" 
          disabled={loading}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          {loading ? 'Sending...' : 'Send to Backend'}
        </button>
      </form>
      
      {/* Show the response from Express */}
      {responseMessage && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: '#f0f0f0',
          borderRadius: '5px'
        }}>
          <strong>Response from Express:</strong> {responseMessage}
        </div>
      )}
    </div>
  );
}

export default App;