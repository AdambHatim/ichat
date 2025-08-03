'use client'

import React, { useState } from 'react'

export interface SignUpData {
  firstName: string
  lastName: string
  mail: string
  password: string
  confirmPassword: string
}

const Sign_up = () => {
  const [data, setData] = useState<SignUpData>({
    firstName: '',
    lastName: '',
    mail: '',
    password: '',
    confirmPassword: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (field: keyof SignUpData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (res.ok) {
        alert('✅ Account created successfully!')
        // You could redirect here if needed
        // router.push('/signin')
      } else {
        alert(result.error || '❌ Failed to create account')
      }
    } catch (err) {
      console.error(err)
      alert('❌ Server error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First + Last Name */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              value={data.firstName}
              onChange={e => handleChange('firstName', e.target.value)}
              className="w-1/2 rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={data.lastName}
              onChange={e => handleChange('lastName', e.target.value)}
              className="w-1/2 rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={data.mail}
            onChange={e => handleChange('mail', e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={e => handleChange('password', e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm password"
            value={data.confirmPassword}
            onChange={e => handleChange('confirmPassword', e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded bg-blue-600 py-2 font-semibold text-white transition ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
            }`}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a href="/signin" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Sign_up
