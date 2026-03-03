import { memo } from 'react';

const Navbar = () => {
  return (
    <div>
      <div className='border-b border-b-gray-300 p-3 flex justify-between px-65'>
        <div className='font-black text-2xl flex items-center'><div className='h-7 w-7 rounded-full bg-sky-700 flex items-center justify-center text-white'><p>M</p></div>ediTurn</div>
        <div className='flex gap-11'>
            <button>Home</button>
            <button>Book Token</button>
            <button>Track Queue</button>
        </div>
        <div className='flex gap-3'>
            <button className='px-3 py-1 rounded-xl'>Login</button>
            <button className='bg-sky-700 text-white px-3 py-1 rounded-xl'>Register</button>
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);