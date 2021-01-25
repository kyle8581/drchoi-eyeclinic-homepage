import React from 'react'
import './DepartmentButton.css'
function DepartmentButton({text, pass}){
    return(
        <div className="department__button" onClick={pass}><p>{text}</p></div>
    )
}

export default DepartmentButton;