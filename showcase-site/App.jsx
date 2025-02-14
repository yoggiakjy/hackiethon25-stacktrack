import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterWidget from './test-widget'
import WeatherWidget from './weather-widget'
import StockWidget from './stock-widget'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">  
      <div id="text">
        <h1 class="text-3xl font-bold underline">
          Hello world!  
        </h1>
      </div>

      <div id="button">
        <button> Test button </button>
      </div>

      <div class="container mx-auto" id="widgets">
        <div id="widget-1" class="flex-item bg-green-500 hover:bg-green-700 py-2 px-4 mt-4 rounded">
          <CounterWidget/>
        </div>
        <div id="widget-2" class="flex-item bg-blue-500 hover:bg-blue-700 py-2 px-4 mt-4 rounded">
          <WeatherWidget/>
        </div>
        <div id="widget-3" class="flex-item bg-blue-500 hover:bg-blue-700 py-2 px-4 mt-4 rounded">
           <StockWidget/>
        </div>
      </div>
    </div>

  )
}

export default App
