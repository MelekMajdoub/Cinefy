import React from 'react'
import { useState } from 'react'
import { Films } from '../datas/Films'
import FilmItem from './FilmITem'
import Categories from './Categories'
import '../styles/FilmList.css'
import MovieIcon from '@mui/icons-material/Movie';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

function FilmList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = Films.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
    )

    return (
        <div className='FilmList'>
			{/*<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
            />*/}
            {/* All */}
            <div className='SectionTitle'>
                <i className='Sectionicon'><MovieIcon fontSize="large"/></i>
                All Movies
            </div>
            <div className='AlllistHandler'>
                <ul className='list'>
				    {Films.map(({ name, category, id, year, duration, Director, Cap, Pster}) =>
					    !activeCategory || activeCategory === category ? (
						    <div key={id}>
							    <FilmItem
								    name={name}
								    category={category}
								    year={year}
								    duration={duration}
                                    Director={Director}
                                    Cap={Cap}
                                    Pster={Pster}
							    />
						    </div>
					    ) : null
				    )}
			    </ul>
            </div>
            {/* Short Movies */}
            <div className='SectionTitle'>
                <i className='Sectionicon'><CameraRollIcon fontSize="large"/></i>
                Short Movies
            </div>
            <div className='AlllistHandler'>
                <ul className='list'>
				    {Films.map(({ name, category, id, year, duration, Director, Cap, Pster}) =>
					    category === 'Short' ?  (
						    <div key={id}>
							    <FilmItem
								    name={name}
								    category={category}
								    year={year}
								    duration={duration}
                                    Director={Director}
                                    Cap={Cap}
                                    Pster={Pster}
							    />
						    </div>
					    ) : null
				    )}
			    </ul>
            </div>
            {/* Short Movies */}
            <div className='SectionTitle'>
                <i className='Sectionicon'><LocalMoviesIcon fontSize="large"/></i>
                Long Movies
            </div>
            <div className='AlllistHandler'>
                <ul className='list'>
				    {Films.map(({ name, category, id, year, duration, Director, Cap, Pster}) =>
					    category === 'Long' ?  (
						    <div key={id}>
							    <FilmItem
								    name={name}
								    category={category}
								    year={year}
								    duration={duration}
                                    Director={Director}
                                    Cap={Cap}
                                    Pster={Pster}
							    />
						    </div>
					    ) : null
				    )}
			    </ul>
            </div>
            {/* Documentaries */}
            <div className='SectionTitle'>
                <i className='Sectionicon'><GroupWorkIcon fontSize="large"/></i>
                Documentaries
            </div>
            <div className='AlllistHandler'>
                <ul className='list'>
				    {Films.map(({ name, category, id, year, duration, Director, Cap, Pster}) =>
					    category === 'Documentary' ?  (
						    <div key={id}>
							    <FilmItem
								    name={name}
								    category={category}
								    year={year}
								    duration={duration}
                                    Director={Director}
                                    Cap={Cap}
                                    Pster={Pster}
							    />
						    </div>
					    ) : null
				    )}
			    </ul>
            </div>

			
		</div>
    )
}

export default FilmList