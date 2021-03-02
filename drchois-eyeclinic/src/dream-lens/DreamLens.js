import React from 'react'
import Media from 'react-media'
import DesktopDreamLens from './DesktopDreamLens'
import MobileDreamLens from './MobileDreamLens'
import TopNav from '../TopNav'
function DreamLens() {
    return (
        <>
            <TopNav />
            <Media
                queries={{
                    small: { maxWidth: 500 },
                    medium: { maxWidth: 1024 },
                }}
            >
                {(matches) =>
                    matches.small ? <MobileDreamLens /> : <DesktopDreamLens />
                }
            </Media>
        </>
    )
}

export default DreamLens
