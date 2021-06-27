import React, { useRef, useEffect, forwardRef, useState } from 'react'

import Lasik from './Lasik'
import Lasek from './Lasek'
import SmileHome from './Smile/Smile_home'
import { Link } from 'react-scroll'
import { SightCorrectionSlideContext } from '../../SightCorrectionSlideContext'

function SurgeryInOne({ pageState }) {
    const lasekRef = useRef(null)
    const lasikRef = useRef(null)
    const smileRef = useRef(null)
    // const { pageState, setPageState } = useState(SightCorrectionSlideContext)
    const scrollToLasek = () =>
        lasekRef.current.scrollIntoView({ behavior: 'smooth' })

    const scrollToLasik = () =>
        lasikRef.current.scrollIntoView({ behavior: 'smooth' })

    const scrollToSmile = () =>
        smileRef.current.scrollIntoView({ behavior: 'smooth' })
    const scrollTo = {
        lasek: scrollToLasek,
        lasik: scrollToLasik,
        smile: scrollToSmile,
    }
    const refs = { lasek: lasekRef, lasik: lasikRef, smile: smileRef }
    // const Lasik = () => {
    //     return <div>Lasik not ready</div>
    // }
    console.log('sio page state : ' + pageState)
    useEffect(() => {
        if (scrollTo[pageState] !== undefined) {
            console.log(scrollTo[pageState])
            scrollTo[pageState]()
            // console.log('move to', pageState)
        } else {
            console.log('Error : move to ' + pageState)
        }
    }, [pageState, scrollTo])
    const LasikWithRef = forwardRef((props, ref) => {
        return (
            <div ref={ref}>
                <Lasik />
            </div>
        )
    })
    const LasekWithRef = forwardRef((props, ref) => {
        return (
            <div ref={ref}>
                <Lasek />
            </div>
        )
    })
    const SmileWithRef = forwardRef((props, ref) => {
        return (
            <div ref={ref}>
                <SmileHome />
            </div>
        )
    })
    return (
        <section className="surgeryInOne-container">
            <LasikWithRef ref={lasikRef} />
            <LasekWithRef ref={lasekRef} />
            <SmileWithRef
                id="smile"
                ref={smileRef}
                style={{ border: '1px solid red' }}
            />
        </section>
    )
}

export default SurgeryInOne
