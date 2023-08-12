import React from 'react'
import { Link } from 'react-router-dom'

export default function FavsLogged() {
  return (
    <div>
                    <div class="d-flex justify-content-center">
                        <h5 className='text-xl mt-1 mb-3'>No tienes favoritos</h5>
                    </div>

                    <div class="d-flex justify-content-center">
                        <Link to="/tienda" class="btn btn-dark">Ir a tienda</Link>
                    </div>
                </div>
  )
}
