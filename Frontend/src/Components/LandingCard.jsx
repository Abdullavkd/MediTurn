import { memo } from 'react';

const LandingCard = ({icon, title, paragraph}) => {
  return (
    <div className='border border-gray-300 rounded-2xl p-7 flex flex-col gap-3 shadow'>
        <div className='w-9 h-9 p-2 rounded-xl bg-sky-200 shadow-2xl flex items-center justify-center font-bold'>{icon}</div>
        <h2 className='font-bold'>{title}</h2>
        <p>{paragraph}</p>
    </div>
  );
};

export default memo(LandingCard);