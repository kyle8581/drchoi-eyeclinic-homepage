import React,{useState, useEffect} from 'react'
import firebase from 'firebase/app'
import draftToHtml from 'draftjs-to-html'
import { Link } from 'react-router-dom'
function EventList() {
    const [htmlData, setHtmlData] = useState('')
    const eventList=[]
    useEffect(() => {
        const db = firebase.firestore()
        const collection = db.collection('events')
        collection.onSnapshot(s=>{
            s.forEach(e=>{
                let doc=collection.doc(e.id)
                doc.get().then(ele=>{
                    // console.log(draftToHtml(JSON.parse(ele.data().content)))
                    setHtmlData(draftToHtml(JSON.parse(ele.data().content)))
                    eventList.push(htmlData)
                })
            })
        })
    }, [])
    console.log(eventList[0])
    return (
        <div>
            {eventList.map(event=>{
                <div>
                    <div dangerouslySetInnerHTML={{__html:event}}></div>
                    <Link to="/event-modify">수정</Link>
                </div>
            })}
            <Link to="/createEvent">작성</Link>
        </div>
    )
}

export default EventList
