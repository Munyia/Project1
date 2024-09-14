import React, { useState } from 'react'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('If an account with that email exists, a password reset link will be sent.')
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="email" className="block text-gray-600 text-sm font-normal">
          Enter your email address
        </label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your email address"
          className="h-10 w-full border border-gray-300 rounded-md px-4 bg-gray-100 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white font-semibold rounded-md px-6 py-2 mt-4 hover:bg-blue-600 transition-colors"
        >
          Send Password Reset Link
        </button>
      </form>
      {message && <p className="mt-4 text-center text-gray-600">{message}</p>}
    </div>
  )
}

export default ForgotPassword
