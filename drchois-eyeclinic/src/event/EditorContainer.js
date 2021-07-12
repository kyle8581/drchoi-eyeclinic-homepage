import React, { Component } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import firebase from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'
import './EventCreate.css'
import { useHistory } from 'react-router-dom'
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

class EditorContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }
    // editortoHtml: Function =(editorState)=>{
    //     console.log(editorState)
    //     draftToHtml(this.convertToRaw(editorState.getCurrentContent()))
    // }
    onEditorStateChange = (editorState) => {
        const contentState = editorState.getCurrentContent()
        console.log(convertToRaw(contentState))
        this.setState({
            editorState,
        })
    }

    render() {
        const { editorState } = this.state
        var db = firebase.firestore()
        var ref = db.collection('events')
        var eventSubmit = (e) => {
            console.log(editorState.getCurrentContent())
            console.log(
                JSON.stringify(convertToRaw(editorState.getCurrentContent()))
            )
            ref.add({"title":"event", "content": JSON.stringify(convertToRaw(editorState.getCurrentContent()))}
               
            ).then(() => {
                alert('이벤트가 저장됐습니다.')
                this.props.history.push('/events')
            })
            e.preventDefault()
        }
        return (
            <div className="editor">
                <p>이벤트 작성</p>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
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
                <button onClick={eventSubmit}>제출</button>
                {/* <IntroduceContent dangerouslySetInnerHTML={{__html:this.editorToHtml}}/> */}
            </div>
        )
    }
}

export default EditorContainer
