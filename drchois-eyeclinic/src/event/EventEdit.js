import React, { useState, useEffect, useRef, useContext } from 'react'
import { useHistory } from "react-router-dom";
import firebase from 'firebase/app'
import styled from 'styled-components/macro'
import TopNav from '../TopNav'
import { Progress, Button, Form, Checkbox } from 'semantic-ui-react'
import { UserContext } from '../UserContext'
import 'semantic-ui-css/semantic.min.css'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
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
const InputTag = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-family: NanumSquare_acEB;
`
function EventEdit() {
    const [title, setTitle] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [image, setImage] = useState(null)
    const [hasLink, setHasLink] = useState(false)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [link, setLink] = useState('')
    const [thumbnailUrl, setThumbnailUrl] = useState("")
    const [imageUrl, setImageUrl] = useState('')
    const [thumbnailUploadStatus, setThumbnailUploadStatus] = useState(0)
    const [thumbnailUploadStart, setThumbnailUploadStart] = useState(false)
    const [uploadStatus, setUploadStatus] = useState(0)
    const [uploadStart, setUploadStart] = useState(false)
    const [thumbnailSelected, setThumbnailSelected] = useState(false)
    const [fileSelected, setFileSelected] = useState(false)
    const [viewsCount, setViewsCount] = useState(0)
    const fileInputRef = useRef()
    const thumbnailInputRef = useRef()
    // if true : current page is event create page; else : current page is modify page
    const createOrEdit = window.location.href.includes('event-create')
    var eventSlug = ''
    if (!createOrEdit) {
        eventSlug = window.location.href.split('/')[-1]
    }
    console.log(eventSlug)
    if (!createOrEdit) {
    }
    const { userInfo, setUserInfo } = useContext(UserContext)
    let history = useHistory()
    useEffect(()=>{
        if(userInfo.authority !== "admin"){
            alert("권한이 없습니다.")
            history.goBack()
        }
    },[userInfo])
    useEffect(() => {
        if (!createOrEdit) {
            const db = firebase.firestore()
            const ref = db.collection('events')
            const doc = ref.doc(eventSlug)
            doc.get().then((e) => {
                setTitle(e.data().title)
                setThumbnailUrl(e.data().thumbnail_url)
                setImageUrl(e.data().image_url)
                setHasLink(e.data().hasLink)
                setLink(e.data().link)
                setStartDate(e.data().start_date)
                setEndDate(e.data().end_date)
                setViewsCount(e.data().views_count)
            })
        }
    }, [])
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            setFileSelected(true)
        }
    }
    const handleThumnnailChange = (e)=>{
        if (e.target.files[0]) {
            setThumbnail(e.target.files[0])
            setThumbnailSelected(true)
        }
    }
    const storage = firebase.storage()
    const handleThumbnailUpload = () => {
        setThumbnailUploadStart(true)
        const uploadTask = storage.ref(`event/${thumbnail.name}`).put(thumbnail)
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const percentUpload = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setThumbnailUploadStatus(percentUpload)
                if (percentUpload === 100) {
                    setThumbnailUploadStart(false)
                }
            },
            (error) => {
                console.log(error)
            },
            () => {
                storage
                    .ref('event')
                    .child(thumbnail.name)
                    .getDownloadURL()
                    .then((url) => {
                        setThumbnailUrl(url)
                    })
            }
        )
    }
    const handleUpload = () => {
        setUploadStart(true)
        const uploadTask = storage.ref(`event/${image.name}`).put(image)
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const percentUpload = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setUploadStatus(percentUpload)
                if (percentUpload === 100) {
                    setUploadStart(false)
                }
            },
            (error) => {
                console.log(error)
            },
            () => {
                storage
                    .ref('event')
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setImageUrl(url)
                    })
            }
        )
    }
    const handleSubmit = () => {
        const db = firebase.firestore()
        const ref = db.collection('event')

        ref.add({
            title: title,
            thumbnail_url: thumbnailUrl,
            image_url: imageUrl,
            start_date: startDate,
            end_date: endDate,
            hasLink: hasLink,
            link: link,
            timestamp_end_date: new Date(endDate),
            views: viewsCount,
        }).then(() => {
            alert('이벤트가 저장됐습니다.')
        })
    }
    return (
        <Wrapper>
            <TopNav />
            <Container>
                <Form>
                    <InputTag>제목</InputTag>
                    <Form.Field>
                        <input
                            placeholder="이벤트 제목"
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                        />
                    </Form.Field>
                    <InputTag>썸네일</InputTag>
                    <Button
                        icon="file"
                        onClick={() => {
                            thumbnailInputRef.current.click()
                        }}
                    >
                        Choose file
                    </Button>
                    {thumbnailSelected ? (
                        <div>{thumbnailInputRef.current.files[0].name}</div>
                    ) : (
                        <></>
                    )}
                    <input
                        ref={thumbnailInputRef}
                        type="file"
                        onChange={handleThumnnailChange}
                        hidden
                    />

                    <Button
                        onClick={handleThumbnailUpload}
                        style={{ marginTop: '30px' }}
                    >
                        업로드
                    </Button>
                    {thumbnailUploadStart ? (
                        <Progress
                            percent={thumbnailUploadStatus}
                            indicating
                            size="medium"
                        />
                    ) : (
                        <></>
                    )}
                    <img src={thumbnailUrl} alt="" style={{ marginTop: '30px'}} />
                    <InputTag>이벤트 사진</InputTag>
                    <Button
                        icon="file"
                        onClick={() => {
                            fileInputRef.current.click()
                        }}
                    >
                        Choose file
                    </Button>
                    {fileSelected ? (
                        <div>{fileInputRef.current.files[0].name}</div>
                    ) : (
                        <></>
                    )}
                    <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleChange}
                        hidden
                    />

                    <Button
                        onClick={handleUpload}
                        style={{ marginTop: '30px' }}
                    >
                        업로드
                    </Button>
                    {uploadStart ? (
                        <Progress
                            percent={uploadStatus}
                            indicating
                            size="medium"
                        />
                    ) : (
                        <></>
                    )}
                    <img src={imageUrl} alt="" style={{ marginTop: '30px', width:"500px" }}  />
                    <Form.Field>
                        <Checkbox
                            label="link 여부"
                            style={{ marginTop: '30px' }}
                            checked={hasLink}
                            onChange={(e) => {
                                setHasLink(!hasLink)
                            }}
                        />
                    </Form.Field>

                    {<div>{hasLink}</div>}
                    {/* <InputBlock /> */}

                    {hasLink ? (
                        <Container style={{ marginTop: '0' }}>
                            <label htmlFor="linkText">연결 링크</label>
                            <input
                                type="text"
                                id="linkText"
                                value={link}
                                onChange={(e) => {
                                    setLink(e.target.value)
                                }}
                            />
                        </Container>
                    ) : (
                        <></>
                    )}
                    <InputTag>시작일자</InputTag>

                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => {
                            setStartDate(e.target.value)
                        }}
                    />
                    <InputTag>종료일자</InputTag>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => {
                            setEndDate(e.target.value)
                        }}
                    />
                    <Button
                        onClick={handleSubmit}
                        style={{ marginTop: '20px' }}
                    >
                        완료
                    </Button>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default EventEdit
