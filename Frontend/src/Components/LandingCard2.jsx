import { memo } from 'react';

const LandingCard = ({number, title, paragraph}) => {
  return (
    <div className='p-7 flex flex-col gap-3 shadow'>
        <div className='font-bold text-4xl text-sky-300'>{number}</div>
        <h2 className='font-bold'>{title}</h2>
        <p>{paragraph}</p>
    </div>
  );
};

export default memo(LandingCard);