import React from 'react'
import './DepartmentButton.css'
function DepartmentButton({text}){
    return(
        <div className="department__button"><p>{text}</p></div>
    )
}

export default DepartmentButton;