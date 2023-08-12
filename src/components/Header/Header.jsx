import React from 'react'
import './Header.css'
import login from './../../assets/img/login.png'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header>
			<nav className="navbar bg-dark flex justify-between" data-bs-theme="dark">
				<ul className='text-gray-400 flex items-center'>
					<li>
						<Link to="/">Inicio</Link>
					</li>
					<li>
						<Link to="/tienda">Tienda</Link>
					</li>
				</ul>
				<div className='flex'>
					<form className="d-flex mr-5" role="search">
						<input className="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search" />
						<button className="btn btn-outline-light" type="submit">Buscar</button>
					</form>
					<Link to="/iniciar-sesion">
						<img src={login} width='32px' className='img-h' />
					</Link>
				</div>
			</nav>
		</header>
	)
}
