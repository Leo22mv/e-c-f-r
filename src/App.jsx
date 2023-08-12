import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/views/Home/Home'
import Store from './components/views/Store'
import Login from './components/views/Login/Login'
import Register from './components/views/Register/Register'
import Contact from './components/views/Contact'

function App() {
  return (
    <>
    <div className="alert alert-danger m-0 rounded-none flex justify-center" id="InDevelopmentAlert"><b>Aplicación en desarrollo</b></div>
    <div>
      <h1>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='tienda' element={<Store />} />
            <Route path='iniciar-sesion' element={<Login />} />
            <Route path='registrarse' element={<Register />} />
            <Route path='contacto' element={<Contact />} />
          </Route>
        </Routes>
      </h1>
    </div>
    </>
  )
}

export default App
