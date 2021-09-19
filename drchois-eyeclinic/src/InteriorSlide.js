import React, {Fragment, useState} from 'react';
import {Placeholder} from "semantic-ui-react"
function InteriorSlide({src, alt}){
    // const imgs = require(""+src);
    // console.log(imgs);
    const [isLoaded, setIsLoaded]= useState(false)
    const loadingStyle = ()=>{
        if(isLoaded){
            return 
        }
        else{
            return {
                displat:"None"
            }
        }
    }
    return(
            <Fragment>
                <img src={src} alt={alt} style={loadingStyle()}/>
                {isLoaded?(<Fragment/>):(<Placeholder/>)}
            </Fragment>
      
    )
        


    

}
export default InteriorSlide