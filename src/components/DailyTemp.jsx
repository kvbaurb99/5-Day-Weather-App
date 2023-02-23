import React, { useEffect, useState } from 'react'
import Day from './Day'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useRef } from 'react';


export default function DailyTemp({ weatherData, currentTemp, isCelsius }) {
    const [daysData, setDaysData] = useState([]);
    const containerRef = useRef(null);

    console.log(daysData)
  
    useEffect(() => {
      setDaysData(weatherData.list);
    }, [weatherData]);
  
    const scrollLeft = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft -= 500; 
      }
    };
  
    const scrollRight = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 500; 
      }
    };
    console.log(isCelsius)
    return (
      <div   className={`md:w-[73%] h-[240px] rounded-xl mt-8 flex flex-col shadow-lg shadow-gray-500 relative ${
        isCelsius
          ? currentTemp < 10
            ? 'bg-gray-400'
            : currentTemp > 20
            ? 'bg-orange-400'
            : currentTemp > 10 && currentTemp < 20
            ? 'bg-purple-400'
            : null
          :
           currentTemp < 50
          ? 'bg-gray-400'
          : currentTemp > 68
          ? 'bg-orange-400'
          : currentTemp >= 50 && currentTemp <= 68
          ? 'bg-purple-400'
          : null
      }`}>
        <div className='p-4'>
          <p className='text-xl text-white font-bold tracking-wide text-center'>Hour 5 days temperature</p>
        </div>
        <div className='flex ml-4 gap-5 mt-2 h-full'>
                <div onClick={scrollLeft} className='w-[30px] h-[30px] bg-black/60 absolute left-4 top-1/2 md:flex justify-center items-center rounded-full cursor-pointer hover:animate-pulse hidden'>
                    <AiOutlineArrowLeft className='text-xl text-white'  />
                </div>  
          <div
            ref={containerRef}
            className='flex overflow-x-scroll scrollbar-hide gap-8 w-full'
            style={{ maxWidth: '100%', scrollBehavior: 'smooth' }}
          >
            {daysData && daysData.map((item) => (
              <Day
              date={new Date(item.dt_txt).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: isCelsius ? '2-digit' : undefined,
                hour12: isCelsius ? false : true,
                })}
                img={item.weather[0].icon}
                temp={item.main.temp}
                day={new Date(item.dt_txt).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                  }).replace(/\//g, '-')}
                  description={item.weather[0].main}
                  isCelsius={isCelsius}
              />
            ))}
          </div>
          <div onClick={scrollRight} className='absolute right-4 bg-black/60 top-1/2 w-[30px] h-[30px] md:flex justify-center items-center rounded-full cursor-pointer hover:animate-pulse hidden'>
            <AiOutlineArrowRight className=' text-xl text-white'  />
          </div>
        </div>
      </div>
    );
  }
