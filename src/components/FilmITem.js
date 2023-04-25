import React from 'react'
import '../styles/FilmItem.css'

function FilmITem({ name, category, year, Cap, Pster}) {
	return (
		<li className='FilmItem'>

			<div>
				<img className='View1' src={Pster} alt={`${name} Poster`} />
			</div>
			<div className='View2'>
				<div class="img-gradient">
					<img className='lmj-plant-item-cover' src={Cap} alt={`${name} Cap`} />
				</div>
				<div  className='FilmItemText'>
					<div className='FilmItemTitle'>{name}</div>
					<div className='FilmItemGenre'>{category}, ({year})</div>
			</div>
			</div>
		</li>
	)
}
export default FilmITem