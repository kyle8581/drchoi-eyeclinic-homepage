import React, { useState, useEffect, useContext, Fragment } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Form, Button, Select, Input, Radio, TextArea } from 'semantic-ui-react'
import { useHistory, useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'
import TopNav from '../TopNav'

function ReviewCreate() {
    const { reviewType } = useParams()
    var collectionId = ''
    if (reviewType === 'sight-correction') {
        collectionId = 'sightcorrection_comment'
    } else {
        collectionId = 'presbyopia_comment'
    }
    const { userInfo, setUserInfo } = useContext(UserContext)
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user && !userInfo.login) {
                setUserInfo({
                    login: true,
                    email: user.email,
                    phone_number: 'null',
                    authority: 'null',
                })
                const db = firebase.firestore().collection('userinfo')

                // 기존에 등록했던 유저인 경우
                // firebase에서 데이터 fetch 해서 userInfo 업데이트 해준다
                db.doc(user.uid)
                    .get()
                    .then((doc) => {
                        // console.log(doc.data())
                        setUserInfo({
                            login: true,
                            email: doc.data().email,
                            phone_number: doc.data().phone_number,
                            authority: doc.data().authority,
                        })
                        if (doc.data().authority !== 'admin') {
                            alert('권한이 없습니다.' + JSON.stringify(userInfo))

                            history.goBack()
                        }
                    })
            } else {
                if (userInfo.authority !== 'admin') {
                    alert('권한이 없습니다.' + JSON.stringify(userInfo))
                    history.goBack()
                }
            }
        })
    }, [])
    const db = firebase.firestore()
    const ref = db.collection(collectionId)
    const history = useHistory()
   
    const initialVal = {
        title: '',
        name: '',
        sex: '',
        date: '',
        age: '',
        leftsight: '',
        rightsight: '',
        content: '',
        surgeryType: '',
        show: true,
    }

    const [formData, setFormData] = useState(initialVal)
    const handleChange = (e, { name, value }) => {
        const _formData = { ...formData, [name]: value }
        setFormData(_formData)
    }
    const handleDateChange = (e)=>{
        const _formData = {...formData, "date":e.target.value}
        setFormData(_formData)
    }
    const reviewSubmit = (e) => {
        ref.add(formData).then((r) => {
            alert('리뷰 작성이 완료되었습니다.')
            history.push('/review/' + reviewType)
        })
        e.preventDefault()
    }
    const ageOption = [
        { key: '10대', text: '10대', value: '10대' },
        { key: '20대', text: '20대', value: '20대' },
        { key: '30대', text: '30대', value: '30대' },
        { key: '40대', text: '40대', value: '40대' },
        { key: '50대', text: '50대', value: '50대' },
        { key: '60대', text: '60대', value: '60대' },
        { key: '70대', text: '70대', value: '70대' },
        { key: '90대', text: '90대', value: '90대' },
        { key: '100대', text: '100대', value: '100대' },
    ]
    var surgeryOption = {}
    if (collectionId === 'sightcorrection_comment') {
        surgeryOption = [
            { key: '비쥬라식', text: '비쥬라식', value: '비쥬라식' },
            { key: '무통라섹', text: '무통라섹', value: '무통라섹' },
            {
                key: '프리미엄무통라섹',
                text: '프리미엄무통라섹',
                value: '프리미엄무통라섹',
            },
            {
                key: '스마일 라식',
                text: '스마일 라식',
                value: '스마일 라식',
            },
        ]
    } else {
        surgeryOption = [
            { key: '백내장', text: '백내장', value: '백내장' },
            { key: '노안', text: '노안', value: '노안' },
        ]
    }

    console.log(ageOption)
    return (
        <>
            <TopNav />
            <div
                style={{
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    height: '100vh',
                    overflowY: 'scroll',
                    flexDirection: 'column',
                    paddingTop: '5rem',
                }}
            >
                <Form onSubmit={reviewSubmit} style={{ width: '800px' }}>
                    <Form.Field
                        label="제목"
                        placeholder="제목"
                        control={Input}
                        name="title"
                        onChange={handleChange}
                        required
                    />
                    <Form.Field
                        label="이름"
                        control={Input}
                        name="name"
                        placeholder={'홍**'}
                        onChange={handleChange}
                        required
                    />
                    <Form.Select
                        label="연령대"
                        options={ageOption}
                        name="age"
                        onChange={handleChange}
                        placeholder={'나이'}
                        required
                        fluid
                    />

                    <Form.Group inline required>
                        <label>성별</label>
                        <Form.Field
                            control={Radio}
                            value="여성"
                            label="여성"
                            name="sex"
                            onChange={handleChange}
                        />
                        <Form.Field
                            control={Radio}
                            value="남성"
                            label="남성"
                            name="sex"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field
                            control={Input}
                            required
                            name="leftsight"
                            onChange={handleChange}
                            label="수술 후 좌안"
                        />
                        <Form.Field
                            control={Input}
                            required
                            name="rightsight"
                            onChange={handleChange}
                            label="수술 후 우안"
                        />
                    </Form.Group>
                    <Form.Select
                        label="수술명"
                        options={surgeryOption}
                        name="surgeryType"
                        onChange={handleChange}
                        placeholder={'수술명'}
                        required
                    />
                    <Form.Field
                        control="input"
                        name="date"
                        required
                        onChange={handleDateChange}
                        label="날짜"
                        type="date"
                    />
                    <Form.Field
                        control={TextArea}
                        name="content"
                        required
                        onChange={handleChange}
                        label="후기"
                    />
                    <Form.Field control={Button}>제출</Form.Field>
                </Form>
                <div>{JSON.stringify(formData)}</div>
            </div>
        </>
    )
}
export default ReviewCreate
