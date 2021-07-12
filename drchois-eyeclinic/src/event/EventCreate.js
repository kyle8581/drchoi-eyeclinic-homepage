import React from 'react'
import './EventCreate.css'
import EditorContainer from './EditorContainer'
import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'

function EventCreate() {
    const db = firebase.firestore()
    const ref = db.collection('events')
    const history = useHistory()
    const eventSubmit = (e, val) => {
        ref.add(val).then(() => {
            alert('이벤트가 저장됐습니다.')
            history.push('/event-d')
        })
        e.preventDefault()
    }
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                overflowX: 'scroll',
            }}
        >
            <p>이벤트 작성</p>
            <EditorContainer />
            <button onSubmit={eventSubmit}>제출</button>
        </div>
    )
}
export default EventCreate
