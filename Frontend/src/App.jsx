import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import LandigPage from './Pages/LandigPage'

function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<LandigPage/>}/>
      </Routes>
    </div>
  )
}

export default App
