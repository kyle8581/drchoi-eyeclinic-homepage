import React from 'react';
import Media from 'react-media'
import MobileSignature from './MobileSignature'
import TabletSignature from './TabletSignature.js'
function SigNatureReturn(){
    return(
        <Media queries={{ small: { maxWidth: 500 }, medium : {maxWidth: 1024} }}>
        {matches =>
            matches.small ? (
           
                    <MobileSignature/>
                
            ):
            (matches.medium ? (
                <TabletSignature/>
            ):
            ( 
               
            )
            )
            
        }
        </Media>
    )
}