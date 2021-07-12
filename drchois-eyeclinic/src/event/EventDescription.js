import React, {useState, useEffect} from 'react'
import draftToHtml from 'draftjs-to-html'
import {converFromRaw} from 'draft-js'
import firebase  from 'firebase'
import {Link} from 'react-router-dom'

function EventDescription() {
    const collectionID = '4pI5pmEufCHMzutjnSHy'
    const [htmlData, setHtmlData] = useState('')
    useEffect(() => {
        const db = firebase.firestore().collection('events')
        const doc = db.doc(collectionID)
        doc.get().then((e) => {
            // console.log(e.data().content)
            // console.log(draftToHtml(JSON.parse(e.data().content)))
            setHtmlData(draftToHtml(JSON.parse(e.data().content)))
            
          

        })
    }, [])
    console.log(htmlData)
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html:htmlData}}></div>
            <Link to="/event-modify">수정</Link>
            <Link to="/createEvent">작성</Link>
        </div>
    )
}

export default EventDescription
