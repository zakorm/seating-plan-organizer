"use client";
import React, { useState } from 'react';
import { addUser } from './actions';
import Link from 'next/link';

export default function Home() {
    
  const [user, setUser] = useState({
    username:  "",
    password: "",
  });
  return (
    <>
      <p className="leading-20"><br/></p>
      <h4>Username:</h4>
      <input         
        type="text"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        className="bg-[#ffffff] rounded-full text-3xl w-64 h-10 text-center"
        name="username"
      />

      <p className="leading-20"><br/></p>

      <h4>Password:</h4>
      <input         
        type="text"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        className="bg-[#ffffff] rounded-full text-3xl w-64 h-10 text-center"
        name="password"
      />

      <p className="leading-20"><br/></p>

      <button
        onClick={() => addUser}
        className="bg-[#beeba2] rounded-full text-3xl w-40 h-15 text-center"
      >
        <Link href="dashboard">
          <h2>Sign Up</h2>
        </Link>
          
      </button>

        
    </>
  );
}
