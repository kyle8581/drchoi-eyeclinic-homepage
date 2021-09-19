import React, { useState, useContext } from 'react'
import SideNav from './sidebar/SideNavBar'
import TopNav from '../TopNav'
import SurgeryInOne from './surgeries/surgeryInOne'
import './SightCorrectionSurgery.css'
import { SightCorrectionSlideContext } from '../SightCorrectionSlideContext'

function SightCorrectionSurgery(props) {

    const { pageState, setPageState } = useContext(SightCorrectionSlideContext)
    // console.log('scs page state : ' + pageState)
    return (
        <>
            <section className="sightcorrection-container">
                <TopNav />
                <SurgeryInOne pageState={pageState} style={{marginTop:"64px"}}/>
            </section>
        </>
    )
}

export default SightCorrectionSurgery
