import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import CounterWidget from './test-widget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar />

    <div className="text-center mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800">Hackiethon Widget Showcase</h1>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
        Add Widget
      </button>
    </div>

      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <div className="bg-gray-300 p-6 rounded-lg shadow-md border">
            <CounterWidget />
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md border">
            <CounterWidget />
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md border">
            <CounterWidget />
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md border">
            <CounterWidget />
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md border">
            <CounterWidget />
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md border">
            <CounterWidget />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App