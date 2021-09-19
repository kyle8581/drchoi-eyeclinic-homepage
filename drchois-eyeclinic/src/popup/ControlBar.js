import React, {useState} from 'react'

function ControlBar({
    setCookie,
    setOpen,
    popupId,
}) {
    const [doNotOpenForDay, setDoNotOpenForDay] = useState(false)

    return (
        <div className="control_bar" style={{ zIndex: '2' }}>
            <input
                type="checkbox"
                id="doNotShow"
                checked={doNotOpenForDay}
                onChange={() => {
                    setDoNotOpenForDay(!doNotOpenForDay)
                }}
            />
            <label htmlFor="doNotShow">1일동안 보이지 않기</label>

            <div
                id="popupClose"
                onClick={() => {
                    if (doNotOpenForDay) {
                        setCookie('popup' + popupId, 'N', 1)
                    }
                    setOpen(false)
                }}
                style={{ cursor: 'pointer' }}
            >
                {'[닫기]'}
            </div>
        </div>
    )
}

export default ControlBar
