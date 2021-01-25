import React from 'react'
import Media from 'react-media'
import FooterMobile from './FooterMobile'
import FooterDesktop from './FooterDesktop'
function FooterReturn(){
    return(
        <Media queries={{mobile: 500, tablet: 800} }>
            {matches=> matches.mobile?(
                <FooterMobile/>
            ):(
                <FooterDesktop/>
            )}
        </Media>
        
    );
}
export default FooterReturn;