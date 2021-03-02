import React, { useState } from 'react'
import SideNav from './sidebar/SideNavBar'
import TopNav from '../TopNav'
import SurgeryInOne from './surgeries/surgeryInOne'
import './SightCorrectionSurgery.css'
function SightCorrectionSurgery(props) {
    var initialpage = 'lasek'
    if (props.location.state) {
        initialpage = props.location.state.initialPage
    }
    const [curPage, setPage] = useState(initialpage)
    console.log(props.location)
    return (
        <>
            <section className="sightcorrection-container">
                <TopNav />
                <SideNav pageState={setPage} />
                <SurgeryInOne pageState={curPage} />
            </section>
        </>
    )
}

export default SightCorrectionSurgery
