import React from 'react'

export default function Day({ date, img, temp, day, description, isCelsius }) {
  const temperature = isCelsius ? temp.toFixed(0) : temp.toFixed(0);
  const unit = isCelsius ? '\u00B0C' : '\u00B0F';

  return (
    <div className='mx-auto'>
      <div className='text-center border-white/40 w-[100px]'>
        <p className='font-bold text-base text-white'>{date}</p>
        <p className='text-xs font-bold tracking-wide text-white'>{day}</p>
        <img src={`http://openweathermap.org/img/wn/${img}.png`} className='mx-auto' />
        <p className='text-white font-bold text-sm'>{description}</p>
        <p className='font-bold text-white text-lg'>
          {temperature}
          {unit}
        </p>
      </div>
    </div>
  );
}
