import { memo, useState } from 'react';
import { Menu, X } from 'lucide-react'; // Using icons for the mobile toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='border-b border-b-gray-300 bg-white sticky top-0 z-50'>
      {/* Container with responsive padding */}
      <div className='p-3 flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-10 lg:px-20'>
        
        {/* Logo Section */}
        <div className='font-bold text-2xl flex items-center gap-2'>
          <div className='h-7 w-7 rounded-full bg-sky-700 flex items-center justify-center text-white text-xs'>
            M
          </div>
          <span className="text-sky-900">MediTurn</span>
        </div>

        {/* Desktop Navigation - Hidden on Mobile, Flex on Medium screens */}
        <div className='hidden md:flex gap-11 items-center'>
            {['Home', 'Book Token', 'Track Queue'].map((item) => (
              <button key={item} className='group relative overflow-hidden flex items-center justify-center h-6'>
                <span className='inline-block group-hover:-translate-y-full duration-500 text-gray-500'>
                  {item}
                </span>
                <span className='absolute top-0 inline-block translate-y-full duration-500 group-hover:translate-y-0 text-sky-700 font-bold'>
                  {item}
                </span>
              </button>
            ))}
        </div>

        {/* Action Buttons + Mobile Toggle */}
        <div className='flex gap-3 items-center'>
            <div className="hidden sm:flex gap-3">
              <button className='px-3 py-1 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors'>Login</button>
              <button className='bg-sky-700 text-white px-3 py-1 rounded-md hover:bg-sky-800 transition-shadow'>Register</button>
            </div>

            {/* Hamburger Icon for Mobile */}
            <button 
              className='md:hidden p-1 text-gray-600' 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`
        md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300
        ${isOpen ? 'max-h-74 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className='flex flex-col p-4 gap-4'>
          {['Home', 'Book Token', 'Track Queue'].map((item) => (
            <button key={item} className='text-left text-gray-600 font-medium py-2 hover:text-sky-700'>
              {item}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-50 sm:hidden">
            <button className='w-full text-center py-2 rounded-xl text-gray-600'>Login</button>
            <button className='w-full text-center bg-sky-700 text-white py-2 rounded-md'>Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);