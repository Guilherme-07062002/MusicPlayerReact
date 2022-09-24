// import { flatMap, initial } from "lodash";
import React from "react";
import music from '../musics/SlowDancinginTheDark.mp3';
import music2 from '../musics/heather.mp3'

// function pause() {
//     return <audio controls autoPlay> <source src="./musics\SlowDancinginTheDark.mp3" typeof="audio/mpeg" /></audio>
// };

export default props =>
<div className={`music`}>
        {((props) => {
            if (props.playing == true) {
                if(props.music == 'music1'){
                return (
                    <audio autoPlay>
                        <source src={music} typeof="audio/mpeg" />
                    </audio>
                )
                }else if(props.music == 'music2'){
                    return (
                        <audio autoPlay>
                            <source src={music2} typeof="audio/mpeg" />
                        </audio>
                    )
                }
            }
        })(props)}
        {/* { props.playing == true ? isPlaying() : <p>ola</p>} */}
        {/* {isPlaying(props)} */}


    </div>
