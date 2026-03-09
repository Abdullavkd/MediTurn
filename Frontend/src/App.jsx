import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import LandigPage from './Pages/LandigPage'
import PatientDashboard from './Pages/PatientDashboard'
import LiveQueue from './Pages/LiveQueue'
import FindClinic from './Pages/FindClinic'
import MyAppointments from './Pages/MyAppointments'
import Profile from './Pages/Profile'
import DashboardLayout from './Components/DashboardLayout'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  return (
    <div>
        {/* <Navbar/> */}
      <Routes>
          <Route path='/' element={<LandigPage/>}/>

        <Route element={
          <ProtectedRoute>
            <DashboardLayout/>
          </ProtectedRoute>
        }>
          <Route path='/patient-dashboard' element={<PatientDashboard/>} />
          <Route path='/live-queue' element={<LiveQueue/>} />
          <Route path='/find-clinic' element={<FindClinic/>} />
          <Route path='/my-appointments' element={<MyAppointments/>} />
          <Route path='/profile' element={<Profile/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
