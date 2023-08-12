import React from 'react'
import { Link } from 'react-router-dom'

export default function FavsLogin() {
  return (
    <>
      <div class="d-flex justify-content-center">
        <h5 className='text-xl mt-1 mb-3'>Inicia sesión para ver tus favoritos</h5>
      </div>
      <div class="d-flex justify-content-center">
        <Link to="/iniciar-sesion" class="btn btn-dark">Ir a iniciar sesión</Link>
      </div>
    </>
  )
}
