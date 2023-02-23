import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import { useState } from 'react'
import TemperatureSwitch from '../utils/TemperatureSwitch';

export default function TopBar({setCityReg, findWeather, cityReg, currentTemp, isCelsius, handleToggle}) {

    const [searchInput , setSearchInput] = useState('')
    console.log(currentTemp)

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setCityReg(searchInput);
        findWeather();
      };

  return (
    <div className='flex flex-col md:flex-row  justify-between'>
        <div>
            <p className={`text-lg text-center md:text-start md:text-3xl ${
                  isCelsius ?
                  currentTemp > 20 ? 'text-orange-500' :
                  currentTemp < 10 ? 'text-gray-500' :
                  currentTemp > 10 && currentTemp < 20 ? 'text-purple-400' :
                  'text-blue-600'
                :
                  (currentTemp > 50 && currentTemp < 68) ? 'text-purple-400' :
                  currentTemp < 50 ? 'text-gray-500' :
                  currentTemp > 68 ? 'text-orange-500' : null
                } font-bold`}>
                {isCelsius
                ? (
                currentTemp > 20 ? 'Who turned up the heat? Stay cool with a cold drink and a dip in the pool.' :
                currentTemp < 0 ? 'Brrr! It\'s freezing out there. Bundle up!' :
                currentTemp < 10 ? 'It\'s a winter wonderland out there, but don\'t forget your scarf.' :
                currentTemp > 30 ? 'Hot town, summer in the city. Cool off with a popsicle.' :
                'Not too hot, not too cold. Just right!'
                )
                : (
                currentTemp > 68 ? 'Who turned up the heat? Stay cool with a cold drink and a dip in the pool.' :
                currentTemp < 32 ? 'Brrr! It\'s freezing out there. Bundle up!' :
                currentTemp < 50 ? 'It\'s a winter wonderland out there, but don\'t forget your scarf.' :
                currentTemp > 86 ? 'Hot town, summer in the city. Cool off with a popsicle.' :
                'Not too hot, not too cold. Just right!'
                    )
                }
            </p>
        </div>
        <form onSubmit={handleSearchSubmit} className='relative flex mt-4 md:mt-0'>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Enter city name ...' type="text" className='border border-gray-400 outline-none rounded-lg px-2 md:py-2 w-full md:w-[450px]'  />
            <AiOutlineSearch onClick={handleSearchSubmit} className='absolute right-1 top-2 md:right-2 md:bottom-2 text-lg md:text-2xl text-gray-400 cursor-pointer hover:text-black' />
            <input type="submit" value="" />
        </form>
        <TemperatureSwitch  isCelsius={isCelsius} handleToggle={handleToggle}/>
    </div>
  )
}
