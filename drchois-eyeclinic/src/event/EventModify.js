import React, { useEffect, useState, useHistory } from 'react'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import firebase from 'firebase/app'
import { getCurrentTime, uploadImageCallBack } from './EditorContainer'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
`
const Preview = styled.div`
    width: 50vw;
    height: 100vh;
`
function EventModify() {
    const { eventID } = useParams()
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    useEffect(() => {
        console.log(eventID)
        const db = firebase.firestore().collection('events')
        const doc = db.doc(eventID)
        doc.get().then((e) => {
            console.log(e.data().content)
            console.log(draftToHtml(JSON.parse(e.data().content)))
            const { contentBlocks, entityMap } = htmlToDraft(
                draftToHtml(JSON.parse(e.data().content))
            )
            console.log(contentBlocks)
            console.log(entityMap)
            const loadContentState = ContentState.createFromBlockArray(
                contentBlocks,
                entityMap
            )
            setEditorState(EditorState.createWithContent(loadContentState))
        })
    }, [])
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }
    const eventSubmit = (e) => {
        const db = firebase.firestore()
        const ref = db.collection('events')
        const doc = ref.doc(eventID)

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
        <Wrapper>
            <Container>
                <Editor
                    style={{ width: '50vw' }}
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
            </Container>
            <button
                onClick={eventSubmit}
                style={{ width: '50px', height: '30px' }}
            >
                submit
            </button>
        </Wrapper>
    )
}

export default EventModify
