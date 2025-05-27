import './App.css'
import NavbarPage from './components/NavbarPage'
import Pages from './components/Pages'
import SectionsPage from './components/SectionsPage'

function App() {

  return (
    <>
      <div className='bg-gray-200 w-full h-screen p-5'>
        <NavbarPage />
        <div className=' w-full h-[85vh] flex justify-center items-start space-x-5 py-5'>
          <Pages />
          <SectionsPage />
        </div>
      </div>
    </>
  )
}

export default App
