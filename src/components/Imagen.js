import React from 'react'

export const Imagen = ({ largeImageURL, previewURL, likes, tags, views }) => {
	return (
		<div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
			<div className='card'>
				<img src={previewURL} alt={tags} className='card-img-top' />

				<div className='card-body text-center text-info'>
					<p className='card-text m-0'>
						Me Gusta {likes} <i className='fas fa-thumbs-up ml-1'></i>
					</p>
					<p className='card-text m-0'>
						Vistas {views} <i className='fas fa-eye ml-1'></i>
					</p>
				</div>

				<div className='card-footer'>
					<a
						href={largeImageURL}
						target='_blanck'
						rel='noopener noreferrer'
						className='btn btn-primary btn-block'
					>
						Ver Imagen <i className='fas fa-eye ml-1'></i>
					</a>
				</div>
			</div>
		</div>
	)
}
