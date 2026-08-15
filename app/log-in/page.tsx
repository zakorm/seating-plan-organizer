'use client';

import React, { useState } from 'react';
import { loginUser } from './actions';



export default function Home() {
  const [user, setUser] = useState({
    username:  '',
    password: '',
  });
  const [status, setStatus] = useState('');
  
  async function loginUserClient(formData: FormData) {
    const result = await loginUser(formData);
    setStatus(result.message);
  }

  return (
    <>
      <form action={loginUserClient}>
        <p className='leading-20'><br/></p>
        <h4>Username:</h4>
        <input         
          type='text'
          value={user.username}
          onChange={(e) => setUser({...user, username: e.target.value})}
          className='bg-[#ffffff] rounded-full text-3xl w-64 h-10 text-center'
          name='username'
        />

        <p className='leading-20'><br/></p>

        <h4>Password:</h4>
        <input         
          type='password'
          value={user.password}
          onChange={(e) => setUser({...user, password: e.target.value})}
          className='bg-[#ffffff] rounded-full text-3xl w-64 h-10 text-center'
          name='password'
        />

        <p className='leading-20'><br/></p>

        <button
          type='submit'
          className='bg-[#beeba2] rounded-full text-3xl w-40 h-15 text-center'
        >
        <h2>Log In</h2>
        </button>
      </form>

      <h3 className='leading-30 text-red-500'>{status}</h3>
      
    </>
    );
  }
