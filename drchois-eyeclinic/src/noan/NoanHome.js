import React,{useRef,useEffect,forwardRef,useContext} from 'react'
import TopNav from '../TopNav'
import Noan from './noan'
import Noan2 from './noan2'
import './NoanHome.css'
import {View} from './noan.components'
import {NoanSlideContext} from '../NoanSlideContext'
function NoanHome() {
    const {noanPageState,setNoanPageState} = useContext(NoanSlideContext)
    const cataractRef = useRef(null) //백내장
    const presbyopiaRef = useRef(null) //노안
    const scrollToCataract=()=>
        cataractRef.current.scrollIntoView({behavior:'smooth'})
    const scrollToPresbyopia=()=>
        presbyopiaRef.current.scrollIntoView({behavior:'smooth'})
    const scrollTo={
        cataract: scrollToCataract,
        presbyopia: scrollToPresbyopia
    }
    const refs={cataract: cataractRef, presbyopia: presbyopiaRef}
    useEffect(() => {
        if (scrollTo[noanPageState] !== undefined) {
            console.log(scrollTo[noanPageState])
            scrollTo[noanPageState]()
        } else {
            console.log('Error : move to ' + noanPageState)
        }
    }, [noanPageState, scrollTo])
    const CataractWithRef = forwardRef((props,ref)=>{
        return(
            <div ref={ref}>
                <Noan/>
            </div>
        )
    })
    const PresbyopiaWithRef = forwardRef((props,ref)=>{
        return(
            <div ref={ref}>
                <Noan2/>
            </div>
        )
    })
    return (
        <div className="noanhome-container">
            <TopNav className="noan-navigator" />
            <View>
            <CataractWithRef ref={cataractRef} className="noan" />
            <PresbyopiaWithRef ref={presbyopiaRef}/>
            </View>
            
        </div>
    )
}
export default NoanHome
