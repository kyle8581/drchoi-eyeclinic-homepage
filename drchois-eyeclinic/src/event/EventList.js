import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { Link } from 'react-router-dom'
function EventList() {
    const [htmlData, setHtmlData] = useState('')
    const [eventIdList, setEventIdList] = useState([])
    const [eventTitleList, setEventTitleList] = useState([])
    useEffect(() => {
        var tmpEventIdList = []
        var tmpEventTitleList = []
        const db = firebase.firestore()
        const collection = db.collection('events')
        collection.get().then((querySnapShot) => {
            querySnapShot.docs.forEach((d) => {
                tmpEventIdList.push(d.id)
                tmpEventTitleList.push(d.data().title)
            })
            setEventIdList(tmpEventIdList)
            setEventTitleList(tmpEventTitleList)
        })
    }, [])
    return (
        <div>
            <div>{JSON.stringify(eventIdList)}</div>
            <ul>
                {eventIdList.map((e) => {
                    return <li>{e}</li>
                })}
            </ul>
            <Link to="/createEvent">작성</Link>
        </div>
    )
}

export default EventList
