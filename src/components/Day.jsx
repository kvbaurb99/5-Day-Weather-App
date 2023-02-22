import React from 'react'

export default function Day({ date, img, temp, day, description }) {
    return (
      <div className='mx-auto'>
        <div className='text-center border-white/40 w-[100px]'>
          <p className='font-bold text-base text-white'>{date}</p>
          <p className='text-xs font-bold tracking-wide text-white'>{day}</p>
          <img src={`http://openweathermap.org/img/wn/${img}.png`} className='mx-auto' />
          <p className='text-white font-bold text-sm'>{description}</p>
          <p className='font-bold text-white text-xl'>{temp.toFixed(0)}&#176;</p>
        </div>
      </div>
    )
  }
