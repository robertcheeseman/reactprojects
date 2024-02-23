// installed react icons package:  'npm i react-icons' is the command for terminal
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'

export default function StarRating({numOfStars = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex);
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex);
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(getCurrentIndex) {
        console.log(getCurrentIndex);
        setHover(rating);
    }


    return (
        <div className='star-rating'>
            {
                [...Array(numOfStars)].map((_,index) => {
                    index += 1;

                    return ( <FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size = {40}
                    />);
                })          
            }        
        </div>
    )
}