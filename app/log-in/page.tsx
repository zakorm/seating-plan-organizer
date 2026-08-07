'use client'
import { useState } from 'react';


export default function Home() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  return (
    <>
    
      <h1 className="leading-40">Sign Up</h1>
      <h4>Username:</h4>
      <input         
        type="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="bg-[#ffffff] rounded-full text-3xl w-64 h-10 text-center"
      />
        <h4>Password</h4>
        <input         
          type="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="bg-[#ffffff] rounded-full text-3xl w-64 h-10 text-center"
        />
      
    </>
  );
}
