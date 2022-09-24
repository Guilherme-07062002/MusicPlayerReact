import React from "react";
import playButton from '../icons/playButton1.png'
import './Button.css'

export default props =>
    <button onClick={ e => props.click && props.click(props.label)}
        className={
            `button
            ${props.previous ? 'previous' : ''}
            ${props.play ? 'play' : ''}
            ${props.next ? 'next' : ''}
            `}
        > 
        {/* <img src={playButton} alt="" /> */}
    </button>

