import { memo, useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const navLinks = ['Home', 'Book Token', 'Track Queue'];

  // Reusable component for the specific sliding animation
  const AnimatedText = ({ children, className = "" }) => (
    <div className={`group relative overflow-hidden h-6 flex items-center justify-center cursor-pointer ${className}`}>
      {/* Current Text (Fades Up) */}
      <span className='inline-block transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0 text-gray-500'>
        {children}
      </span>
      {/* New Text (Fades in from Bottom) */}
      <span className='absolute inset-0 flex items-center justify-center transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-sky-700 '>
        {children}
      </span>
    </div>
  );

  return (
    <nav className='border-b border-b-gray-300 bg-white sticky top-0 z-50'>
      <div className='p-3 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-10 lg:px-20'>
        
        {/* Logo */}
        <div className='font-bold text-2xl flex items-center gap-2'>
          <div className='h-7 w-7 rounded-full bg-sky-700 flex items-center justify-center text-white text-xs'>M</div>
          <span className="text-sky-900">MediTurn</span>
        </div>

        {/* Desktop Links (Animated) */}
        <div className='hidden md:flex gap-8 items-center'>
          {navLinks.map((item) => (
            <AnimatedText key={item}>{item}</AnimatedText>
          ))}
        </div>

        {/* Action Buttons */}
        <div className='flex gap-6 items-center'>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              {/* Static Profile (No Animation) */}
              <button className="flex items-center gap-2 text-gray-600 hover:text-sky-700 font-medium transition-colors">
                <User size={18} />
                <span>Profile</span>
              </button>
              <button onClick={() => setIsLoggedIn(false)} className="p-2 text-red-500 hover:bg-red-50 rounded-full">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex gap-6 items-center">
              {/* Static Login (No Animation) */}
              <button className='text-gray-600 hover:text-sky-700 font-medium transition-colors'>
                Login
              </button>
              
              {/* Animated Register Button */}
              <button className="bg-sky-700 hover:bg-sky-800 text-white px-5 py-2 rounded-lg transition-all active:scale-95 shadow-sm">
                <div className='group relative overflow-hidden h-5 flex items-center justify-center'>
                  <span className='inline-block transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0'>
                    Register
                  </span>
                  <span className='absolute inset-0 flex items-center justify-center transition-all duration-500 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 font-bold'>
                    Join Now
                  </span>
                </div>
              </button>
            </div>
          )}

          {/* Mobile Toggle */}
          <button className='md:hidden p-1' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='p-5 flex flex-col gap-4'>
          {navLinks.map((item) => (
            <button key={item} className='text-left text-gray-600 font-medium'>{item}</button>
          ))}
          <hr />
          <div className='flex flex-col gap-4'>
             <button className='text-left text-gray-600 font-medium'>Login</button>
             <button className='text-left text-sky-700 font-bold'>Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);