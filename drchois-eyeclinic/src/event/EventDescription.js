import React, { useState, useEffect } from 'react'
import draftToHtml from 'draftjs-to-html'
import { converFromRaw } from 'draft-js'
import firebase from 'firebase'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Display = styled.pre`
    width: 800px;
    border: 1px solid;
`
function EventDescription() {
    const [htmlData, setHtmlData] = useState('')
    const { eventID } = useParams()
    useEffect(() => {
        // console.log(eventID)
        const db = firebase.firestore().collection('events')
        const doc = db.doc(eventID)
        doc.get().then((e) => {
            // fetch html data
            setHtmlData(draftToHtml(JSON.parse(e.data().content)))
        })
    }, [])
    console.log(htmlData)
    return (
        <Wrapper>
            <Display dangerouslySetInnerHTML={{ __html: htmlData }}></Display>
            <Link to={'/event-modify/' + eventID}>수정</Link>
            <Link to="/createEvent">작성</Link>
        </Wrapper>
    )
}

export default EventDescription
