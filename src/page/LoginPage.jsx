import React from "react";
import { useNavigate } from "react-router";


function LoginPage() {
  const navigate = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate('/todo')
  }
  return (
    <div className="min-h-screen bg-amber-300 flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-lg shadow-lg w-full max-w-sm p-8 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form  className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>
            <input
              placeholder="you@email.com"
              id="email"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"/>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>
            <input
              placeholder="••••••••"
              id="password"
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"/>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 rounded transition-colors duration-300">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
