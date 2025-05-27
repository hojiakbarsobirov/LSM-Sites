import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import AssignmentPage from './pages/AssignmentPage'
import TrainingPage from './pages/TrainingPage'
import CalendarPage from './pages/CalendarPage'
import StatisticPage from './pages/StatisticPage'
import CertificatesPage from './pages/CertificatesPage'
import SettingsPage from './pages/SettingsPage'


function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={< HomePage/>} />
        <Route path="/courses" element={< CoursesPage/>} />
        <Route path='/assignment' element={<AssignmentPage/>}/>
        <Route path='/training' element={<TrainingPage/>}/>
        <Route path='/calendar' element={<CalendarPage/>}/>
        <Route path='/statistics' element={<StatisticPage/>}/>
        <Route path='/certificates' element={<CertificatesPage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
