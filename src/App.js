import React, { useState, useEffect } from 'react'
import { Formulario } from './components/Formulario'
import { ListadoImagenes } from './components/ListadoImagenes'

function App() {
	const [busqueda, setBusqueda] = useState('')
	const [listResult, setListResult] = useState([])
	const [paginaActual, setPaginaActual] = useState(1)
	const [totalPaginas, setTotalPaginas] = useState(1)

	useEffect(() => {
		const consultarApi = async () => {
			if (busqueda === '') return

			const imagenesPorPagina = 30
			const key = '11147957-4af010bdf506c69b9935ad459'
			const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`

			const response = await fetch(url)
			const resultado = await response.json()

			setListResult(resultado.hits)

			// calcular el total de paginas
			const calcularTotalPagina = Math.ceil(
				resultado.totalHits / imagenesPorPagina
			)
			setTotalPaginas(calcularTotalPagina)

			// mover pantalla hacia arriba
			const jumbotron = document.querySelector('.jumbotron')
			jumbotron.scrollIntoView({ behavior: 'smooth' })
		}

		consultarApi()
	}, [busqueda, paginaActual])

	const paginaAnterior = () => {
		const nuevaPaginaActual = paginaActual - 1
		if (nuevaPaginaActual < 1) {
			return
		}
		setPaginaActual(nuevaPaginaActual)
	}

	const paginaSiguiente = () => {
		const nuevaPaginaActual = paginaActual + 1
		if (nuevaPaginaActual > totalPaginas) {
			return
		}
		setPaginaActual(nuevaPaginaActual)
	}

	return (
		<div className='container py-3'>
			<div className='jumbotron'>
				<p className='lead text-center'>Buscador de imágenes</p>

				<Formulario setBusqueda={setBusqueda} />
			</div>

			{listResult.length > 0 && <ListadoImagenes imagenes={listResult} />}

			<div
				className='w-100 d-flex justify-content-center'
				style={{ gap: '20px' }}
			>
				{paginaActual > 1 && (
					<button className='btn btn-info' onClick={paginaAnterior}>
						<i className='fas fa-angle-left mr-2'></i> Anterior
					</button>
				)}

				{paginaActual < totalPaginas && (
					<button className='btn btn-info' onClick={paginaSiguiente}>
						Siguiente <i className='fas fa-angle-right ml-2'></i>
					</button>
				)}
			</div>
		</div>
	)
}

export default App
