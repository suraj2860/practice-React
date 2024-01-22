import React from 'react'
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleClick = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (
    <div>
        <input type='text' value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)} />
        {"  "}
        <input type='text' value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login