import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Spring from '../images/spring.jpg'
import Hot from '../images/hot.jpg'
import Winter from '../images/winter.jpg'

export default function CurrentWeather({ weatherData, isCelsius, isDark }) {

    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    const currentTemp = weatherData?.list?.[0]?.main?.temp;


    // changing time each second
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);
      
        return () => clearInterval(intervalId);
      }, []);

      // changing date to weekday e.g. Monday, Tuesday etc
    useEffect(() => {
      const date = new Date();
      const options = { weekday: 'long' };
      setCurrentDate(date.toLocaleDateString('en-US', options));
    }, []);

    return (
      <div className={`relative w-full mt-8 shadow-lg ${isDark ? 'shadow-gray-800' : 'shadow-gray-500'} rounded-xl mx-auto`}>
        { currentTemp && (
          <img
            src={
              isCelsius
              ? currentTemp < 10
              ? Winter
              : currentTemp > 10 && currentTemp < 20
              ? Spring
              : Hot
            : currentTemp < 50
            ? Winter
            : currentTemp > 50 && currentTemp < 68
            ? Spring
            : Hot
            }
    className='h-[400px] w-full object-cover rounded-xl'
    alt='weather'
  />
)}
        {weatherData && weatherData.city && weatherData.list &&  (
          <div className='absolute bottom-0 left-0 text-white p-5'>
            <img src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`} alt='weather icon' />
            <p className='text-6xl md:text-8xl font-bold mb-1'>
              {isCelsius
              ? currentTemp.toFixed(0)
              : currentTemp.toFixed(0)}
              &#176;{isCelsius ? 'C' : 'F'}
            </p>
            <p className='text-sm md:text-lg'>{weatherData.list[0].weather[0].description.charAt(0).toUpperCase() + weatherData.list[0].weather[0].description.slice(1)}</p>
            <p className='text-xl md:text-3xl'>{weatherData.city.name}, {weatherData.city.country}</p>
          </div>
        )}
        {!weatherData.length && (<div className='absolute bottom-0 right-0 text-white p-4'>
            <p className='text-right text-2xl font-bold'>{currentTime}</p>
            <p className='font-bold text-2xl hidden md:block'>Sunset time, {currentDate}</p>
            <p className='font-bold text-lg text-right block md:hidden '>{currentDate}</p>
        </div>)}
      </div>
    )
  }
