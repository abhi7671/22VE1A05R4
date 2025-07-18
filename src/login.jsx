import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


function login() {
    const [email,SetEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const hanleLogin = (e) => {
        e.preventDefault();
        if(email && password){
            navigate('/home');
        }
    };
  return (
    <form onSubmit={handleLogin}>
   <h2>Login</h2>
   <input type="email" value={email} onChange={e => SetEmail(e.target.value)} placeholder='Email' />
   <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
   <button type="submit">Login</button>
</form>
  );
}

export default login
