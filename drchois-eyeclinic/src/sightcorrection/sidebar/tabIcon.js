import React from 'react'
import './tabIcon.css'
function TabIcon({ name, id, opacity }) {
    const K_surgeries = ['라식', '라섹', '스마일']
    // console.log({ opacity });
    return (
        <div className="tabContainer">
            <div className={opacity}>
                <img src="surgery/etc/tab.png" alt={name} />
                <div className="title">{K_surgeries[id]}</div>
            </div>
        </div>
    )
}

export default TabIcon
