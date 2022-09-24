import React from "react";
import capa from '../imgs/capa.png'
import './Album.css'

export default props =>
    <div 
    className= {`album
    ${props.img == 'img1' ? 'img1' : ''}
    ${props.img == 'img2' ? 'img2' : ''}` 
    }
    >
        {/* {((props) => {
            if(props.img == 'img1'){
                return( 
                    
                )
            }
        })(props)} */}
    </div>