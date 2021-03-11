import React from 'react'
import { Imagen } from './Imagen'

export const ListadoImagenes = ({ imagenes }) => {
	return (
		<>
			<h4 className='text-center text-warning'>Resultados</h4>
			<div className='col-12 py-4 px-2 m-0 row'>
				{imagenes.map((imagen) => (
					<Imagen
						key={imagen.id}
						largeImageURL={imagen.largeImageURL}
						previewURL={imagen.previewURL}
						likes={imagen.likes}
						tags={imagen.tags}
						views={imagen.views}
					/>
				))}
			</div>
		</>
	)
}
