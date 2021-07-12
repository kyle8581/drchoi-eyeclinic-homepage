import React, { useState } from 'react'
import { Button } from 'react-scroll'
import Popup from 'reactjs-popup'
import styled from 'styled-components/macro'
const PopupWindow = styled(Popup)`
    &-overlay {
        border: 1px solid;
        z-index: 2;
        position: absolute;
    }
    &-content {
        right: 0;
        transform: translate(50vw, 50vh) translate(-150px, -150px);
    }
`
const PopupContent = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .popup_content {
        height: 280px;
    }
    .control_bar {
        width: 300px;
        align-self: flex-end;
        height: 20px;
        background-color: gray;
        display: flex;
        flex-direction: row;
    }
`
function PopupElement() {
    const [open, setOpen] = useState(true)
    return (
        <PopupWindow
            open={open}
            defaultOpen="true"
            position="right bottom"
            closeOnDocumentClick="false"
        >
            <PopupContent>
                <div className="popup_content">content</div>
                <div className="control_bar">
                    <button onClick={()=>{
                        setOpen(false)
                    }}>close</button>
                </div>
            </PopupContent>
        </PopupWindow>
    )
}

export default PopupElement
