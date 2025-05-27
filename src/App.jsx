import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={< HomePage/>} />
        <Route path="/courses" element={< CoursesPage/>} />
      </Route>
    </Routes>
  )
}

export default App
