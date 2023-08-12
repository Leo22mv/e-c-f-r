import React from 'react'
import './Register.css'
import Spinner from '../reusable/Spinner'
import ErrorAlert from '../reusable/ErrorAlert'
import VoidAlert from '../reusable/VoidAlert'

export default function Register() {
  return (
	<>
		<form className='form'>
			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label">Dirección de correo electrónico:</label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
			</div>
			<div className="mb-3">
				<label for="name" className="form-label">Nombre:</label>
				<input type="text" id="name" className="form-control" name="name" />
			</div>
			<div className="mb-3">
				<label for="username" className="form-label">Nombre de usuario:</label>
				<input type="text" id="username" className="form-control" name="username" />
			</div>
			<div className="mb-3">
				<label for="exampleInputPassword1" className="form-label">Contraseña:</label>
				<input type="password" className="form-control" id="exampleInputPassword1" name="password" />
			</div>
			<button className="btn btn-dark">Registrarse</button>
	  	</form>

		<Spinner />
		
		<ErrorAlert />

		<VoidAlert />

		<div className="alert alert-success">
			Registro exitoso
		</div>

		<div className="alert alert-danger">
			Dirección de correo electrónico y/o nombre de usuario existente/s
		</div>
	</>
  )
}
