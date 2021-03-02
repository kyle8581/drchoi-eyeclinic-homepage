import React from 'react'
import TopNav from '../TopNav'
import Noan from './noan'
import './NoanHome.css'
function NoanHome() {
    return (
        <div className="noanhome-container">
            <TopNav className="noan-navigator" />
            <Noan className="noan" />
        </div>
    )
}
export default NoanHome
