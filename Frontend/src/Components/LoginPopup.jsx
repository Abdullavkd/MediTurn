import React from 'react';
import { X } from 'lucide-react';

const LoginPopup = ({ isOpen, onClose }) => {
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

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold mb-1 ml-1">Email address</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none" 
            />
          </div>

          <div>
            <div className="flex justify-between mb-1 px-1">
              <label className="text-sm font-semibold">Password</label>
              <span className="text-xs text-sky-600 font-bold cursor-pointer">Forgot?</span>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-sky-500 outline-none" 
            />
          </div>

          <button className="w-full bg-sky-700 text-white font-bold py-3.5 rounded-xl hover:bg-sky-800 transition-all shadow-lg active:scale-95">
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account? <span className="text-sky-700 font-bold cursor-pointer">Create account</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;