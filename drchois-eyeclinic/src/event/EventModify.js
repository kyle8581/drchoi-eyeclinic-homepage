import React, { useEffect, useState, useHistory } from 'react'
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

import firebase from 'firebase/app'

import { getCurrentTime, uploadImageCallBack } from './EditorContainer'
function EventModify() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const collectionID = '4pI5pmEufCHMzutjnSHy'

    useEffect(() => {
        const db = firebase.firestore().collection('events')
        const doc = db.doc(collectionID)
        doc.get().then((e) => {
            console.log(e.data().content)
            console.log(draftToHtml(JSON.parse(e.data().content)))
            const {contentBlocks, entityMap} = convertFromHTML(draftToHtml(JSON.parse(e.data().content)))
            console.log(contentBlocks)
            console.log(entityMap)
            const loadContentState = ContentState.createFromBlockArray(contentBlocks, entityMap)
            setEditorState(EditorState.createWithContent(loadContentState))

        })
    }, [])
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }
    const eventSubmit = (e) => {
        const db = firebase.firestore()
        const ref = db.collection('events')
        const doc = ref.doc(collectionID)
        
        doc.update({
            title: 'event',
            content: JSON.stringify(
                convertToRaw(editorState.getCurrentContent())
            ),
        }).then(() => {
            alert('이벤트가 저장됐습니다.')
            // this.props.history.push('/events')
        })
        e.preventDefault()
    }
    return (
        <div>
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: {
                        uploadCallback: uploadImageCallBack,
                        alt: { present: true, mandatory: false },
                    },
              }}
            />
            <button onClick={eventSubmit}>submit</button>
        </div>
    )
}

export default EventModify
