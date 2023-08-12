import React from 'react'
import './Login.css'
import Spinner from '../reusable/Spinner'
import ErrorAlert from '../reusable/ErrorAlert'
import { Link } from 'react-router-dom'
import VoidAlert from '../reusable/VoidAlert'

export default function Login() {
  return (
    <>
        <form className='form'>
            <div className="mb-3">
                <label for="username" className="form-label">Nombre de usuario:</label>
                <input type="text" id="username" className="form-control" name="username" />
                </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
                </div>
            <button className="btn btn-dark">Iniciar sesión</button>
        </form>

        <Spinner />

        <VoidAlert />

        <ErrorAlert />
        
        <div className="alert alert-success">
            Inicio de sesion exitoso
        </div>

        <div className="alert alert-danger">
            Nombre de usuario y/o contraseña incorrecto/s.
        </div>


        <div className='flex justify-center'>
            <p className='text-xl'>¿No posee una cuenta?</p>
        </div>

        <div className='flex justify-center mt-3'>
            <Link className='btn btn-dark' to="/registrarse">Registrarse</Link>
        </div>
    </>
  )
}
