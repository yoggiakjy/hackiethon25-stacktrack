import './App.css'
import Navbar from './navbar'
import Dropdown from './Dropdown'
import DropZone from './Dropzone'

function App() {

  let bgUrl = "https://gamepress.gg";
  if (bgUrl){
    return (
      <div className="App">
        <div className="min-h-screen bg-white-900">
          <Navbar />
          <Dropdown/>
          <object data={bgUrl} style={{flex:1}}>
            
            Error: embedded data could not be loaded.
          </object>
          <DropZone/>
          
        </div>
      </div>
    )
  }

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