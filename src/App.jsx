
import './App.css'
import { Outlet } from 'react-router-dom'
import { NavItem } from 'react-bootstrap'
import NavItems from './components/NavItems'

function App() {

  return (
    <>
    <Outlet></Outlet>
    </>
  )
}

export default App
