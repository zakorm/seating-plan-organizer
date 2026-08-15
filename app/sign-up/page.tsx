'use client';
import React, { useState } from 'react';
import { addUser } from './actions';
import Link from 'next/link';

export default function Home() {
  const [status, setStatus] = useState('')
  const [user, setUser] = useState({
    username:  '',
    password: '',
  });
  async function addUserClient(formData: FormData) {
    const result = await addUser(formData);
    setStatus(result.message);
  }
  return (
    <>
      <form action={addUserClient}>
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
          type='text'
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
          <h2>Sign Up</h2>
        </button>
      </form>

      <h3 className='leading-30 text-red-500'>{status}</h3>
        
    </>
  );
}
