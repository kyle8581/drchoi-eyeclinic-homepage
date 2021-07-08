import React, { useState } from 'react'
import firebase from 'firebase/app'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

const Label = styled.label`
    margin-bottom: 1rem;
    margin-top: 1rem;
`
const Input = styled.input`
    height: 2rem;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Form = ({ formVal, setFormVal, submitFunction }) => {
    const handleChange = (e) => {
        const _fromVal = { ...formVal, [e.target.name]: e.target.value }
        setFormVal(_fromVal)
    }
    return (
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '600px',
                marginTop: '5rem',
            }}
            onSubmit={(e) => {
                submitFunction(e, formVal)
            }}
        >
            <Label htmlFor="name">
                <p>이름</p>
            <p style={{fontSize:"8px"}}>{'('}작성 예{') '}홍길동-{'>'}홍*동</p>
            </Label>
            <Input
                type="text"
                required="true"
                name="name"
                value={formVal.name}
                onChange={handleChange}
                pattern="[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]\*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+"
            />
            <Label htmlFor="age">연령대</Label>
            <select name="age" id="age" onChange={handleChange}>
                <option value="10대">10대</option>
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="30대">40대</option>
                <option value="30대">50대</option>
                <option value="30대">60대</option>
                <option value="30대">70대</option>
                <option value="30대">80대</option>
                <option value="30대">90대</option>
            </select>
            <Label>성별
            <Row>
                <Label htmlFor="sex">여성</Label>
                <Input
                    type="radio"
                    value="여성"
                    required="true"
                    name="sex"
                    onChange={handleChange}
                />
                <Label htmlFor="sex" style={{ marginLeft: '1rem' }}>
                    남성
                </Label>
                <Input
                    type="radio"
                    value="남성"
                    name="sex"
                    onChange={handleChange}
                />
            </Row>
            </Label>
            <div>
                <p>수술 후 시력</p>
                <p style={{fontSize:"8px"}}>{'('}작성 예{') '}1.1, 0.7, -0.2</p>
                <Row>
                <Label htmlFor="leftsight">
                    <p>수술 후 좌안&nbsp;</p>
                    </Label>
                <Input
                type="text"
                required="true"
                name="leftsight"
                value={formVal.leftsight}
                onChange={handleChange}
                pattern="(\-\d.\d)|(\d.\d)"
                />
                <Label htmlFor="sightafter" style={{ marginLeft: '1rem' }}>
                    <p>수술 후 우안&nbsp;</p></Label>
                <Input
                type="text"
                required="true"
                name="rightsight"
                value={formVal.rightsight}
                onChange={handleChange}
                pattern="(\-\d.\d)|(\d.\d)"
                />
                </Row>
            </div>
            <div>
                <p>수술명</p>
            <Label htmlFor="surgeryType"></Label>
            <select name="surgeryType" id="surgeryType" onChange={handleChange}>
                <option value="라식">라식</option>
                <option value="라섹">라섹</option>
                <option value="스마일 라식">스마일 라식</option>
            </select>
            </div>
            <Label htmlFor="title">제목</Label>
            <Input
                type="text"
                required="true"
                name="title"
                onChange={handleChange}
            />
            <Label htmlFor="date">날짜</Label>
            <Input
                type="date"
                required="false"
                name="date"
                value={formVal.date}
                onChange={handleChange}
            />

            <Label htmlFor="content">후기</Label>
            <textarea
                type="text"
                required="true"
                name="content"
                value={formVal.content}
                style={{ height: '300px' }}
                onChange={handleChange}
            />
            <button
                type="submit"
                style={{
                    marginBottom: '10rem',
                    marginTop: '2rem',
                    width: '5rem',
                }}
            >
                Submit
            </button>
        </form>
    )
}
function useForm(defaultState, submitFunction) {
    const [state, setState] = useState(defaultState)
    return [
        state,
        <Form
            formVal={state}
            setFormVal={setState}
            submitFunction={submitFunction}
        />,
        setState,
    ]
}
export default function ReviewCreate() {

    const db = firebase.firestore()
    const ref = db.collection('sightcorrection_comment')
    const history = useHistory()
    const reviewSubmit = (e, val) => {
        alert('submit start')
        ref.add(val).then((r) => {
            console.log(history)
            alert()
            history.push('/sight-correction-review')
        })
        e.preventDefault()
    }
    const initialVal = {
        title: '',
        name: '',
        sex: '',
        date: '',
        age:'',
        leftSight: '',
        rightSight: '',
        content: '',
        surgeryType: '',
    }
    const [formValue, FormElement] = useForm(initialVal, reviewSubmit)
   

    // const json_prettyfied = JSON.stringify(formValue, null, '\t')
    return (
        <>
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
                <p style={{fontSize:'30px'}}>후기 작성</p>
                <div style={{ marginTop: '2rem' }}>
                    <pre>

                    {/* {json_prettyfied} */}
                    </pre>
                    </div>
                {FormElement}
            </div>
        </>
    )
}
