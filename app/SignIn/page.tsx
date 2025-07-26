'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SignIn = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row items-center justify-center bg-gray-100 px-4">
      {/* Logo Section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <Image
          src="/logo.png"
          alt="iChat Logo"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign in
          </button>
        </form>

        <div className="text-center">
          <Link href="/NewPassword" className="text-blue-600 hover:underline">
            Forget Password?
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/SignUp"
            className="block bg-slate-300 py-2 rounded hover:bg-slate-400 transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
