import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import CounterWidget from './test-widget'
import Dropdown from './Dropdown'
import DropZone from './Dropzone'

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar />
    <Dropdown/>
    <div className="text-center mt-10">
      <h1 className="text-4xl font-extrabold text-gray-800">Hackiethon Widget Showcase</h1>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
        Add Widget
      </button>
      <DropZone/>
    </div>
      
      
    </div>
  )
}

export default App