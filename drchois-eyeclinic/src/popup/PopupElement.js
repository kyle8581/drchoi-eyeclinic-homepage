import React, { useState, useEffect, memo, Fragment } from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components/macro'
import firebase from 'firebase/app'
import { Placeholder } from 'semantic-ui-react'
import ControlBar from './ControlBar'
const PopupWindow = styled(Popup)`
    &-overlay {
        z-index: 2;
        position: absolute;
        width: 300px;
        height: 300px;
        transform: translate(100vw, 100vh) translate(-300px, -300px);
    }
    &-content {
        right: 0;

        width: 300px;
        height: 300px;
        a {
            text-decoration: none;
            border: none;
        }
    }
`
const PopupContainer = styled.div`
    width: 300px;
    height: 300px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .popup_content {
        height: 280px;
    }
    .control_bar {
        position: absolute;
        width: 300px;
        align-self: flex-end;
        height: 25px;
        background-color: #434343;
        display: flex;
        flex-direction: row;
        transform: translateY(275px);
        align-items: center;
        color: #fff;
        font-size: 0.8rem;
    }
    .control_bar > #doNotShow {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    #popupClose {
        margin-left: auto;
        margin-right: 1rem;
    }
`
function getCookie(name) {
    var cookie = document.cookie
    if (document.cookie !== '') {
        var cookie_array = cookie.split('; ')
        for (var index in cookie_array) {
            var cookie_name = cookie_array[index].split('=')
            if (cookie_name[0] === name) {
                return cookie_name[1]
            }
        }
    }
    return
}
function setCookie(name, value, expiredays) {
    var date = new Date()
    date.setDate(date.getDate() + expiredays)
    document.cookie =
        escape(name) + '=' + escape(value) + '; expires=' + date.toUTCString()
}

function PopupElement() {
    var MyDate = new Date()
    var date

    date =
        MyDate.getFullYear()+"-"+('0' + (MyDate.getMonth() + 1)).slice(-2)+ "-" +('0' + MyDate.getDate()).slice(-2)
    const [open, setOpen] = useState(false)
    const [hasLink, setHasLink] = useState(false)
    const [endDate, setEndDate] = useState(null)
    const [link, setLink] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [popupId, setPopupId] = useState(null)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        if (imageUrl === '') {
            console.log('image load')
            const db = firebase.firestore()
            const ref = db.collection('popup')
            const doc = ref.doc('popup_config')
            doc.get().then((e) => {
                setImageUrl(e.data().background_img)
                setHasLink(e.data().hasLink)
                setLink(e.data().link)
                setPopupId(e.data().id)
                setEndDate(e.data().end_date)
            })
        }
    }, [imageUrl])
    useEffect(() => {
        console.log(endDate)
        console.log("curdate" + date)
        var popupCookie = getCookie('popup' + popupId)
        console.log(popupCookie)

        if (endDate >= date && popupCookie !== 'N') {
            setOpen(true)
            console.log('popup open')
        } else {
            console.log('popup close')
        }
    }, [endDate])
    const compareLink =()=>{return true;}

    const PopupContent = memo(function PopupContent() {
        console.log("popup render")
        if (hasLink) {
            return (
                <Fragment>
                    {loaded ? (
                        <Fragment />
                    ) : (
                        <Placeholder
                            style={{ width: '300px', height: '300px' }}
                        >
                            <Placeholder.Image square />
                        </Placeholder>
                    )}
                    <div style={loaded ? {} : { display: 'none' }}>
                        <img
                            onClick={() => {
                                window.location.href = link
                            }}
                            src={imageUrl}
                            alt="popup_image"
                            style={{
                                width: '300px',
                                height: '300px',
                                cursor: 'pointer',
                            }}
                            onLoad={() => {
                                setLoaded(true)
                            }}
                        />
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    {loaded ? (
                        <Fragment />
                    ) : (
                        <Placeholder
                            style={{ width: '300px', height: '300px' }}
                        >
                            <Placeholder.Image square />
                        </Placeholder>
                    )}
                    <div style={loaded ? {} : { display: 'none' }}>
                        <img
                            src={imageUrl}
                            alt="popup_image"
                            style={{ width: '300px', height: '300px' }}
                        />
                    </div>
                </Fragment>
            )
        }
    }, compareLink)
    
    if (open) {
        return (
            <PopupWindow
                open={open}
                defaultOpen="true"
                position="right bottom"
                closeOnDocumentClick="false"
            >
                <PopupContainer>
                    <PopupContent />
                    <ControlBar setCookie={setCookie} popupId={popupId} setOpen={setOpen}/>
                </PopupContainer>
            </PopupWindow>
        )
    } else {
        return <></>
    }
}

export const MemoPopupElement = memo(PopupElement)
