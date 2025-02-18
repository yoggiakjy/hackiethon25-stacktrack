import './App.css'
import Navbar from './navbar'
import Dropdown from './Dropdown'
import DropZone from './Dropzone'

function App() {

  return (
    <div className="min-h-screen bg-white-900">
    <Navbar />
    <Dropdown/>
    <div className="text-center mt-10">
      <h1 className="text-4xl font-extrabold text-white-800">Hackiethon Widget Showcase</h1>
      <DropZone/>
    </div>
      
      
    </div>
  )
}

export default App