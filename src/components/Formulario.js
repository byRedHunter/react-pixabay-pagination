import React, { useState } from 'react'
import { Error } from './Error'

export const Formulario = ({ setBusqueda }) => {
	const [termino, setTermino] = useState('')
	const [error, setError] = useState(false)

	const buscarImagenes = (e) => {
		e.preventDefault()

		//validar
		if (termino.trim() === '') {
			setError(true)
			return
		}

		setError(false)
		// enviarl el temino a App
		setBusqueda(termino)
	}

	return (
		<form onSubmit={buscarImagenes}>
			<div className='row'>
				<div className='form-group col-md-8'>
					<input
						type='text'
						className='form-control form-control-lg'
						placeholder='Busca una imagen...'
						onChange={(e) => setTermino(e.target.value)}
						value={termino}
					/>
				</div>

				<div className='form-group col-md-4'>
					<input
						type='submit'
						className='btn btn-lg btn-block btn-success'
						value='Buscar'
					/>
				</div>
			</div>

			{error && <Error mensaje='Complete el campo para buscar poder buscar.' />}
		</form>
	)
}
