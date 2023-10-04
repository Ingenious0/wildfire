import React, { useState } from 'react';

function Loginpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <h2 style={{ textAlign: 'center', marginTop: '20%' }}>
        Rescue Team Login
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: '300px', margin: '80px auto' }}
      >
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Enter Unique username"
            onChange={handleUsernameChange}
            required
            style={{
              width: '90%',
              padding: '10px',
              margin: '5px 0',
              marginBottom: '10%',
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="**********"
            required
            style={{
              width: '90%',
              padding: '10px',
              marginRight: '5%',
              marginTop: '2%',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '97%',
            padding: '10px',
            margin: '10% 0',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Loginpage;
