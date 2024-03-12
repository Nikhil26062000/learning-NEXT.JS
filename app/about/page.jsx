
"use client";
import { Roboto } from 'next/font/google';
const roboto = Roboto({subsets:["latin"],weight:"500"})

import React, { useState } from 'react'

const About = () => {
  // console.log(process.env.JWT_SECRET)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      alert("Login successfull")

      // Handle successful login
      // For example, redirect user to dashboard
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>This is about page</h1>
      <h2 className={roboto.className}>This is different font</h2>
      <input
      className='m-2 p-2 bg-yellow-100'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
      className='m-2 p-2 bg-yellow-100'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className='m-2 p-2 bg-green-500' onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default About 