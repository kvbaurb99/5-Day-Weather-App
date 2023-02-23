import React from 'react'
import { BsWind, BsEmojiSmile, BsDropletFill } from 'react-icons/bs'
import { TbGauge } from 'react-icons/tb'

export default function WeatherDetails({weatherData, isCelsius, isDark}) {


  return (
    <div className={`md:w-[25%] h-[240px] border border-gray-400 rounded-xl mt-8 flex justify-between shadow-md ${isDark ? 'shadow-slate-400' : 'shadow-black'}`}>   
    <div className='flex flex-col border-r border-gray-400/60 h-[90%] w-[50%] md:w-[250px] justify-around m-auto ml-4 md:ml-8'>
      <div className='flex items-center'>
        <BsDropletFill className='text-4xl text-blue-600' />
        <div className='ml-4'>
            <p className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>Humidity</p>
            <p className={`${isDark ? 'text-white' : 'text-black'}`}>{weatherData.list ? weatherData.list[0].main.humidity : null}%</p>
        </div>  
      </div>
      <div className='flex items-center'>
        <BsWind className='text-4xl text-gray-500' />
        <div className='ml-4'>
            <p className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>Wind</p>
            <p className={`${isDark ? 'text-white' : 'text-black'}`}>{weatherData.list ? weatherData.list[0].wind.speed.toFixed(0) : null} {isCelsius ? 'm/s' : 'mph'}</p>
        </div>
      </div> 
    </div>
    <div className='flex flex-col h-[90%] w-[50%] md:w-[250px] justify-around items-end m-auto mr-4 md:mr-8'>
      <div className='flex items-center'>
        <TbGauge className='text-4xl text-red-600' />
        <div className='ml-4'>
            <p className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>Pressure</p>
            <p className={`${isDark ? 'text-white' : 'text-black'}`}>{weatherData.list ? weatherData.list[0].main.pressure : null} hPa</p>
        </div>  
      </div>
      <div className='flex items-center'>
        <BsEmojiSmile className='text-4xl text-orange-600' />
        <div className='ml-4'>
            <p className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>Feels like</p>
            <p className={`${isDark ? 'text-white' : 'text-black'}`}>{weatherData.list ? weatherData.list[0].main.feels_like.toFixed(0) : null}&#176;{isCelsius ? 'C' : 'F'}</p>
        </div>
      </div> 
    </div>
</div>
  )
}
