import React from 'react'
import './Greeting.css'
import blinkingVideo from './videos/0_0_video.mp4'
// import Background from '/firstpage.png'
function Greeting(){
    return(
        <div className="slide0__container">
            <video className="blinking__video" autoPlay muted>
                <source src={blinkingVideo} type='video/mp4'/>
            </video>
            <img src='/firstpage.png' alt="bg"/>
        </div>
            
        )
}
export default Greeting;