import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import ContentMain from './components/ContentMain'
import SettingsMain from './components/SettingsMain'
import './App.css'

function App() {

  return (
    <Router>
        <div className="app-container">
            <SideBar />   

            <Routes>
                <Route path="/" element={<ContentMain />} /> {/* Default */}
                <Route path="/page2" element={<SettingsMain />} />
            </Routes>   

            <div className="rightbar">Rightbar</div>
        </div>
    </Router>  
  )
}

export default App
