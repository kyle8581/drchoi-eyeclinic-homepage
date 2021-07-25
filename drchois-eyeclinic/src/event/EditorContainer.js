import React, { useState } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
// import Editor from 'draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import firebase from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'
import './EventCreate.css'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
export const getCurrentTime = () => {
    var today = new Date()
    var date =
        today.getFullYear() +
        '_' +
        (today.getMonth() + 1) +
        '_' +
        today.getDate()
    var time =
        today.getHours() + '.' + today.getMinutes() + '.' + today.getSeconds()
    var dateTime = date + '_' + time
    return dateTime
}
export async function uploadImageCallBack(file) {
    var storageRef = firebase.storage().ref()
    const currentTime = getCurrentTime()
    console.log(currentTime)
    var imageRef = storageRef.child(currentTime)
    var imageURL = ''
    return imageRef.put(file).then((snapshot) => {
        const ret1 = imageRef.getDownloadURL().then((url) => {
            alert(url)
            imageURL = url
            return new Promise((resolve) => {
                resolve({ data: { link: imageURL } })
            })
        })
        return ret1
    })
}
const Container = styled.div`
    display: flex;
    flex-direction: row;
`
const Output = styled.pre`
    img,
    iframe {
        align-self: center;
    }
    div > img {
        align-self: center;
    }
    .upload_img {
        align-self: center;
    }
`
function EditorContainer() {
    const history = useHistory()
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [htmlState, setHtmlState] = useState('')

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
        setHtmlState(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }

    var db = firebase.firestore()
    var ref = db.collection('events')
    var eventSubmit = (e) => {
        console.log(editorState.getCurrentContent())
        console.log(
            JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        )
        ref.add({
            title: 'event',
            content: JSON.stringify(
                convertToRaw(editorState.getCurrentContent())
            ),
        }).then(() => {
            alert('이벤트가 저장됐습니다.')
            history.push('/event-list')
        })
        e.preventDefault()
    }
    return (
        <div className="editor">
            <p>이벤트 작성</p>
            <Container>
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
                            className: 'upload_img',
                            uploadCallback: uploadImageCallBack,
                            alt: { present: true, mandatory: false },
                            alignmentEnable: true,
                        },
                        fontFamily: {
                            options: [
                                'NanumSquare_acR',
                                'NanumSquare_acB',
                                'NanumSquare_acEB',
                                'Arial',
                                'Georgia',
                                'Impact',
                                'Tahoma',
                                'Times New Roman',
                                'Verdana',
                            ],
                        },
                    }}
                />
                <Output
                    dangerouslySetInnerHTML={{
                        __html: htmlState,
                    }}
                />
            </Container>

            <textarea
                style={{ width: '100%' }}
                disabled
                value={draftToHtml(
                    convertToRaw(editorState.getCurrentContent())
                )}
            />
            <button onClick={eventSubmit}>제출</button>
        </div>
    )
}

export default EditorContainer
