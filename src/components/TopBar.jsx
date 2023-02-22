import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import { useState } from 'react'

export default function TopBar({setCityReg, findWeather, cityReg, currentTemp}) {

    const [searchInput , setSearchInput] = useState('')

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setCityReg(searchInput);
        findWeather();
      };

  return (
    <div className='flex flex-col md:flex-row  justify-between'>
        <div>
            <p className={`text-lg text-center md:text-start md:text-3xl ${currentTemp > 20 ? 'text-orange-500' : currentTemp < 10 ? 'text-gray-500' : currentTemp > 10 && currentTemp < 20 ? 'text-yellow-500' : 'text-blue-600'} font-bold`}>{currentTemp > 20 ? 'Who turned up the heat? Stay cool with a cold drink and a dip in the pool.' : currentTemp < 10 ? 'It\'s a winter wonderland out there, but don\'t forget your scarf.' : 'Not too hot, not too cold. Just right!'}</p>
        </div>
        <form onSubmit={handleSearchSubmit} className='relative flex mt-4 md:mt-0'>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Enter city name ...' type="text" className='border border-gray-400 outline-none rounded-lg px-2 md:py-2 w-full md:w-[450px]'  />
            <AiOutlineSearch onClick={handleSearchSubmit} className='absolute right-1 top-1 md:right-2 md:bottom-2 text-lg md:text-2xl text-gray-400 cursor-pointer hover:text-black' />
            <input type="submit" value="" />
        </form>
    </div>
  )
}
