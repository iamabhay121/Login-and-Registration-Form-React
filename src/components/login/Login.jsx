import { useState } from 'react'
import React from 'react'
import {Link } from 'react-router-dom'

const Login = ({setIsLoggedIn}) => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); 
  };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  )
}

export default Login