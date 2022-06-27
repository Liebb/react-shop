import React from 'react';
import '../styles/NotFound.scss';
const NotFound = () => {
	return (
		//Esto es un bloque
		<div className='mainContainer'>
			{/* Estos son elementos */}
			<div className='mainContainer__404'>
			 	<h1>404</h1>
			</div>
			<div className='mainContainer__Message'>
				<p>No pudimos encontrar el recurso que buscaste</p>
			</div>
			<div className='mainContainer__button'>
				<button><a className='mainContainer__button-ancla' href="/">Go back</a></button>
			</div>
		</div>
	);
}

export default NotFound;