import React, { useRef, useEffect, forwardRef } from 'react'

import Lasik from './Lasik'
import Lasek from './Lasek'
import SmileHome from './Smile/Smile_home'
import { Link } from 'react-scroll'
function SurgeryInOne({ pageState }) {
    const lasekRef = useRef(null)
    const lasikRef = useRef(null)
    const smileRef = useRef(null)
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
    useEffect(() => {
        if (refs[pageState].current) {
            scrollTo[pageState]()
        }
    }, [pageState])
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
