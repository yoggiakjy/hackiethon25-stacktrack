import './App.css'
import Navbar from './navbar'
import Dropdown from './Dropdown'
import DropZone from './Dropzone'

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-white-900">
        <Navbar />
        <Dropdown/>
        <div className="relative text-center mt-10">
          <h1 className="outline-text">
            SHOWCASE
          </h1>
          <h2 className="main-title">
            Hackiethon Widget Showcase
          </h2>
        </div>
        <DropZone/>
      </div>
    </div>
  )
}

export default App