import React from 'react';
import Media from 'react-media'
import MobileSignature from './MobileSignature'
import TabletSignature from './TabletSignature.js'
import DesktopSignature from './DesktopSignature'
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
               <DesktopSignature/>
            )
            )
            
        }
        </Media>
    )
}
export default SigNatureReturn;