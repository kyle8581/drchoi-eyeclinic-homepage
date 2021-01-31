import React from 'react'
import './Greeting.css'
import Media from 'react-media'
import TabletGreeting from './TabletGreeting'
import blinkingVideo from './videos/0_0_video.mp4'
// import Background from '/firstpage.png'
function Greeting() {
    return (
        <div className="slide0__container">
            <Media
                queries={{
                    small: { maxWidth: 500 },
                    medium: { maxWidth: 1024 },
                }}
            >
                {(matches) =>
                    matches.small ? (
                        <div className="mobile__greeting">
                            <img src="/firstpage.png" alt="bg" />
                        </div>
                    ) : matches.medium ? (
                        <TabletGreeting />
                    ) : (
                        <video className="blinking__video" autoPlay muted>
                            <source src={blinkingVideo} type="video/mp4" />
                        </video>
                    )
                }
            </Media>
        </div>
    )
}
export default Greeting
