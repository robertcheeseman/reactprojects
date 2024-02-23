// installed react icons package:  'npm i react-icons' is the command for terminal
import {FaStar} from 'react-icons/fa'
import './styles.css'
import { useState } from 'react'

export default function StarRating({numOfStars = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        console.log(getCurrentIndex)
    }

    function handleMouseLeave(getCurrentIndex) {
        console.log(getCurrentIndex)
    }

    console.log("num of stars is: " + numOfStars)

    return (
        <div className='star-rating'>
            {
                [...Array(numOfStars)].map((_,index) => {
                    index += 1

                    return <FaStar
                    key={index}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    size = {40}
                    />
                })

                
            }
            
        </div>
    )
}