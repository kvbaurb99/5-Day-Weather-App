import React from 'react'
import cx from 'classnames'
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa'

export default function TemperatureSwitch({isCelsius, handleToggle}) {
  return (
    <button
      className="flex items-center gap-2 text-gray-500 hover:text-gray-700 focus:outline-none md:mx-0 mx-auto mt-4 md:mt-0"
      onClick={handleToggle}
    >
      <span className="text-xs">{isCelsius ? 'C' : 'F'}</span>
      <span className={cx('text-lg', isCelsius ? 'text-blue-500' : 'text-gray-400')}>
        <FaTemperatureLow />
      </span>
      <span className={cx('text-lg', !isCelsius ? 'text-red-500' : 'text-gray-400')}>
        <FaTemperatureHigh />
      </span>
      <span className="text-xs">{isCelsius ? '°C' : '°F'}</span>
    </button>
  )
}
