import React from 'react'
import './Greeting.css'
import Media from 'react-media';

import blinkingVideo from './videos/0_0_video.mp4'
// import Background from '/firstpage.png'
function Greeting(){
    return(
        <div className="slide0__container">
            <Media queries={{ small: { maxWidth: 500 } }}>
            {matches =>
                matches.small ? (
                <img src='/firstpage.png' alt="bg"/>):
                ( 
                <video className="blinking__video" autoPlay muted>
                    <source src={blinkingVideo} type='video/mp4'/>
                </video>)
                }
            </Media>
        </div>
            
        )
}
export default Greeting;