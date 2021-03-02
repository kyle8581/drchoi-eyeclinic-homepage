import React from 'react'
import Media from 'react-media'
import DesktopIcl from './DesktopIcl'
import MobileIcl from './MobileIcl'
function Icl() {
    return (
        <Media
            queries={{
                small: { maxWidth: 500 },
                medium: { maxWidth: 1024 },
            }}
        >
            {(matches) => (matches.small ? <MobileIcl /> : <DesktopIcl />)}
        </Media>
    )
}

export default Icl
