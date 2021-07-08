import React from 'react'
import './EventCreate.css'
import EditorContainer from './EditorContainer'
// import firebase from './firebase/app'
// import {useHistory} from 'react-router-dom'
// const db = firebase.firestore()
// const ref = db.collection('events')
// const history = useHistory()
// const eventSubmit =(e,val) =>{
//     ref.add(val).then(()=>{
//         alert('이벤트가 저장됐습니다.')
//         history.push('/events')
//     })
//     e.preventDefault()
// }
// const initialVal=
function EventCreate() {
    return (
        <div>
            <p>이벤트 작성</p>
            <EditorContainer />
        </div>
    )
}

export default EventCreate
