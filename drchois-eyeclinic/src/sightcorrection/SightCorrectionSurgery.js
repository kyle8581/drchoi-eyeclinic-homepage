import React, { useState, useContext } from 'react'
import SideNav from './sidebar/SideNavBar'
import TopNav from '../TopNav'
import SurgeryInOne from './surgeries/surgeryInOne'
import './SightCorrectionSurgery.css'
import { SightCorrectionSlideContext } from '../SightCorrectionSlideContext'

function SightCorrectionSurgery(props) {
    // var initialpage = 'lasik'
    // if (props.location.state) {
    //     initialpage = props.location.state.initialPage
    // }
    // const [curPage, setPage] = useState(initialpage)
    console.log(props.location)
    const { pageState, setPageState } = useContext(SightCorrectionSlideContext)
    console.log('scs page state : ' + pageState)
    return (
        <>
            <section className="sightcorrection-container">
                <TopNav />
                <SideNav pageState={pageState} />
                <SurgeryInOne pageState={pageState} />
            </section>
        </>
    )
}

export default SightCorrectionSurgery
