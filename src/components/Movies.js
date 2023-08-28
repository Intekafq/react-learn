import { element } from 'prop-types';
import Logo from '../assets/logo512.png'

function Movies(props)


{
    return(
        <div className="movie">
        <img src={props.img} alt="" />
        <p className='title'>{props.title}</p>
        <p className='date'>{props.year}</p>
        </div>
        
    )
}

export default Movies;

