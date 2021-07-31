import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import styled from 'styled-components/macro'
import TopNav from '../TopNav'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const Container = styled.div`
    display: flex;
    width: 500px;
    flex-direction: column;
    align-self: center;
    margin-top: 100px;

`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`
function PopupEdit() {
    const [popupId, setPopupId] = useState("")
    const [image, setImage] = useState(null)
    const [hasLink, setHasLink] = useState(false)
    const [endDate, setEndDate] = useState(null)
    const [link, setLink] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    useEffect(() => {
        const db = firebase.firestore()
        const ref = db.collection('popup')
        const doc = ref.doc('popup_config')
        doc.get().then((e) => {
            setImageUrl(e.data().background_img)
            setHasLink(e.data().hasLink)
            setLink(e.data().link)
            setEndDate(e.data().end_date)
            setPopupId(e.data().id)
        })
    }, [])
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    const InputBlock = () => {
        if (hasLink) {
            return (
                <Container style={{marginTop:"0"}}>
                    <label htmlFor="linkText">연결 링크</label>
                    <input type="text" id="linkText" value={link} />
                </Container>
            )
        } else {
            return <></>
        }
    }
    const storage = firebase.storage()
    const handleUpload = () => {
        const uploadTask = storage.ref(`popup/${image.name}`).put(image)
        uploadTask.on(
            'state_changed',
            (snapshot) => {},
            (error) => {
                console.log(error)
            },
            () => {
                storage
                    .ref('popup')
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setImageUrl(url)
                    })
            }
        )
    }
    const handleSubmit = () =>{
        const db = firebase.firestore()
        const ref = db.collection('popup')
        const doc = ref.doc('popup_config')
        doc.update({
            id:popupId+1,
            background_img: imageUrl,
            end_date : endDate,
            hasLink: hasLink,
            link : link
        }).then(() => {
            alert('팝업이 저장됐습니다.')
        })


    }
    return (
        <Wrapper>
            <TopNav/>
            <Container>
                <input type="file" onChange={handleChange} />
                <button onClick={handleUpload}>업로드</button>

                <img src={imageUrl} alt="" />
                <label htmlFor="hasLink">link 여부</label>
                <input
                    type="checkbox"
                    id="hasLink"
                    checked={hasLink}
                    onChange={(e) => {
                        setHasLink(!hasLink)
                    }}
                />
                {<div>{hasLink}</div>}
                <InputBlock />
                <label htmlFor="endDate">종료 일자</label>
                <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => {
                        setEndDate(e.target.value)
                    }}
                />
                <button onClick={handleSubmit}>완료</button>
            </Container>
        </Wrapper>
    )
}

export default PopupEdit
