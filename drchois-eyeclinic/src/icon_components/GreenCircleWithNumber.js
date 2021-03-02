import React from 'react'
import { Circle } from './GreenCircleWithNumber.components'
function GreenCircleWithNumber({ number }) {
    return (
        <Circle className="green_circle_with_number">
            <p>{number}</p>
        </Circle>
    )
}

export default GreenCircleWithNumber
