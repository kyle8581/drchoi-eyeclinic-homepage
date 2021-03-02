import styled from 'styled-components'
import { GiCheckMark } from 'react-icons/gi'
import React from 'react'

const Check = styled(GiCheckMark)`
    color: #fff;
    width: 0.8rem;
`
const Circle = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: #63c3c4;
    display: flex;
    justify-content: center;
    align-items: center;
`
function GreenCircleWithCheck() {
    return (
        <Circle className="green_circle_with_check">
            <Check />
        </Circle>
    )
}

export default GreenCircleWithCheck
