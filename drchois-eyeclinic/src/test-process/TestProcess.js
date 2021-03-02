import React from 'react'
import Media from 'react-media'
import DesktopTestProcess from './DesktopTestProcess'
import MobileTestProcess from './MobileTestProcess'
function TestProcess() {
    return (
        <Media
            queries={{
                small: { maxWidth: 500 },
                medium: { maxWidth: 1024 },
            }}
        >
            {(matches) =>
                matches.small ? <MobileTestProcess /> : <DesktopTestProcess />
            }
        </Media>
    )
}

export default TestProcess
