import React, { useState } from 'react'
import CurrentWeather from './CurrentWeather'
import TopBar from './TopBar'
import axios from 'axios'
import { useEffect } from 'react'
import WeatherDetails from './WeatherDetails'
import DailyTemp from './DailyTemp'

export default function Main() {

    const [weatherData, setWeatherData] = useState([])
    const [cityReg, setCityReg] = useState()
    const [currentTemp, setCurrentTemp] = useState('');


    // geolocation setting weather depending on your location
    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
    
            axios
              .get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=d35a78bd1d0ecc091d1ec60b14ee7345`)
              .then((res) => {
                const cityName = res.data[0].name;
                setCityReg(cityName);
              });
          });
        }
      }, []);
    
      useEffect(() => {
        if (cityReg) {
          axios
            .get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityReg}&units=metric&appid=d35a78bd1d0ecc091d1ec60b14ee7345`)
            .then((res) => {
              setWeatherData(res.data);
              setCurrentTemp(res.data?.list?.[0]?.main?.temp);
            })
            .catch((error) => {
              console.log('Error fetching weather data: ', error);
            });
        }
      }, [cityReg]);


    // function for finding weather data
    const findWeather = (e) => {
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityReg}&units=metric&appid=d35a78bd1d0ecc091d1ec60b14ee7345`).then(res => {
            setWeatherData(res.data)
        })
    }







  return (
    <div className='h-screen w-[90%] bg-[#F5F5F5] p-4 mx-auto'>
        
        <TopBar setCityReg={setCityReg} findWeather={findWeather} cityReg={cityReg} currentTemp={currentTemp} />
        { weatherData.list && weatherData.list.length ?
        <>
        <CurrentWeather weatherData={weatherData} />
        <div className='flex flex-col md:flex-row gap-10'>
            <WeatherDetails weatherData={weatherData} />
            <DailyTemp weatherData={weatherData} currentTemp={currentTemp} />
        </div>
        </>
        : null
        }
        
        
    </div>
  )
}
