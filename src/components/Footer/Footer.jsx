import React from 'react'
import logo from './../../assets/img/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer>
			<nav className="navbar fixed-bottom bg-dark" id="footer">				
				<div className="container-fluid d-flex justify-content-center">
					<Link to="/tienda" className="navbar-brand">
						<img src={ logo }  alt="" width="30" height="27" className="img-f d-inline-block align-text-top" />
					</Link>
				</div>
				<div className="container-fluid d-flex justify-content-center">
					<Link to="/contacto" className="nav-link text-white mr-4 p-1 rounded-full hover:shadow-lg hover:bg-gray-600">
						Contacto
					</Link>
				</div>
			</nav>
		</footer>		
	)
}
