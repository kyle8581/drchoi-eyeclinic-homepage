import React from 'react'
import './Greeting.css'
import blinkingVideo from './videos/videoplayback.mp4'
function Greeting(){
    return(
        <div>
            <video className="blinking__video" autoPlay muted>
                <source src={blinkingVideo} type='video/mp4'/>
            </video>
            <div className="center__letter">
                압구정 최안과
            </div>
        </div>
            
        )
}
export default Greeting;