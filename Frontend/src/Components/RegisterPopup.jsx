import React from 'react';
import { X } from 'lucide-react';

const RegisterPopup = ({ isOpen, onClose, login }) => {
  // Logic: Only render if 'isOpen' is true
  if (!isOpen) return null;

  return (
    // Backdrop: Covers the whole screen, blurs the background
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md px-4">
      
      {/* The Login Card */}
      <div className="relative w-full max-w-[400px] bg-white rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-800 transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Register</h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold mb-1 ml-1">Name</label>
            <input 
              type="text" 
              placeholder="Enter Your Name Here" 
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 ml-1">Email address</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 ml-1">Phone</label>
            <input 
              type="number" 
              placeholder="Enter Your Phone Number" 
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none" 
            />
          </div>

          <div className='block text-sm font-semibold mb-1 ml-1'>
              <label className="text-sm font-semibold">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none" 
            />
          </div>

          <button className="w-full bg-sky-700 text-white font-bold py-3.5 rounded-xl hover:bg-sky-800 transition-all shadow-lg active:scale-95">
            Register
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Have you already an acoount? <span className="text-sky-700 font-bold cursor-pointer" onClick={login}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPopup;