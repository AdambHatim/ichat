'use client'

import React from 'react'
import { useState } from 'react'

interface SignUpData {
    firstName: string,
    lastName: string,
    mail: string,
    password: string,
    confirmPassword: string
}
const Sign_up = () => {

  const [Data, setData] = useState<SignUpData>({
    firstName:"",
    lastName:"",
    mail:"",
    password:"",
    confirmPassword:"",
  })
  return (
    <div className = "flex min-h-screen flex-col items-center justify-center bg-gray-100">
    <div className = 'max-w-md bg-white rounded-xl shadow-md p-6 space-y-6'>
        <p className='text-xl'> Create account </p>

    <form className='py-5'>
        {/* First/Last name */}
    <div className='flex flex-row py-4 gap-5'>

    <div>
        <label htmlFor="First name" className="sr-only">Email</label>
        <input
            id="email"
            type="email"
            placeholder="First name"
            required
            onChange={(e)=>{Data.firstName=e.target.value}}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        />
    </div>

    <div>
    <label htmlFor="Last name" className="sr-only">Email</label>
    <input
        id="email"
        type="email"
        placeholder="Last name"
        required
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
    />
    </div>

    </div>

        {/*Mail*/}

    <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input
            id="email"
            type="email"
            placeholder="Mail"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="Password" className="sr-only">Email</label>
        <input
            id="email"
            type="email"
            placeholder="Password"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        />
    </div>

    <div>
        <label htmlFor="Password" className="sr-only">Email</label>
        <input
            id="email"
            type="email"
            placeholder="Confirm password"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        />
    </div>

            <button
            type="submit"
          >
            Create Account
          </button>
    </form>

    </div>
    </div>
  )
}

export default Sign_up