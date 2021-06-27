import React, { useState, useContext } from 'react'
import TopNav from '../TopNav'
import { useHistory } from 'react-router-dom'
import {
    SignupContainer,
    SignUpWrapper,
    Header,
    Row,
    Column,
    HeaderImg,
    ExtraTitle,
    ExtraTitleMint,
    HeaderDetail,
    EBTitle,
    ConsentR1,
    ConsentBox,
    ConsentTitle,
    CheckRow,
    Submit,
} from './Signup.components'
import GreenCircleWithCheck from '../icon_components/GreenCircleWithCheck'
import firebase from 'firebase/app'
import { UserContext } from '../UserContext'
function Signup() {
    const history = useHistory()
    const { userInfo, setUserInfo } = useContext(UserContext)
    const [consent1, setConsent1] = useState('')
    const [consent2, setConsent2] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [agree1, setAgree1] = useState('default')
    const [agree2, setAgree2] = useState('default')
    const [email, setEmail] = useState(userInfo.email)
    fetch('/signup/consent1.txt')
        .then((res) => res.text())
        .then((text) => {
            setConsent1(text)
            // console.log(consent1)
        })
        .catch((err) => {
            console.log(err)
        })
    fetch('/signup/consent2.txt')
        .then((res) => res.text())
        .then((text) => {
            setConsent2(text)
            // console.log(consent1)
        })
        .catch((err) => {
            console.log(err)
        })

    const signupSubmit = (e) => {
        if (email === 'none') {
            history.push('/')
            return
        }
        const db = firebase.firestore()
        db.collection('userinfo')
            .add({
                email: email,
                phone_number: phonenumber,
                authority: 'default',
            })
            .then((res) => {
                console.log(res)
                alert('회원가입이 완료되었습니다.')
                setUserInfo({
                    email: email,
                    phone_number: phonenumber,
                    login: 'truen',
                    authority: 'default',
                })
                localStorage.setItem('signup', 'true')
                history.push('/')
            })
        e.preventDefault()
    }
    return (
        <>
            <TopNav />
            <SignUpWrapper>
                <SignupContainer
                    onSubmit={(e) => {
                        signupSubmit(e)
                    }}
                >
                    <Header>
                        <Column>
                            <button
                                onClick={() => {
                                    history.push('/')
                                }}
                            >
                                home
                            </button>
                            {/* <div>{JSON.stringify(userInfo)}</div> */}
                            <Row style={{ marginTop: '70px' }}>
                                <ExtraTitle>압구정최안과는</ExtraTitle>
                            </Row>
                            <Row>
                                <ExtraTitleMint>안전한 수술</ExtraTitleMint>
                                <ExtraTitle>을 약속드립니다.</ExtraTitle>
                            </Row>
                            <Row>
                                <HeaderDetail>
                                    23년 경력의 주치의, 1:1 맞춤진료로 만족도
                                    높은 의료시스템
                                </HeaderDetail>
                            </Row>
                        </Column>
                        <HeaderImg src="/signup/header.png" />
                    </Header>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                        required
                        onChange={(e) => {
                            setPhonenumber(e.target.value)
                        }}
                    />
                    <Column style={{ marginTop: '70px' }}>
                        <EBTitle>약관동의</EBTitle>
                        <Row style={{ alignItems: 'center' }}>
                            <GreenCircleWithCheck />
                            <ConsentR1>
                                압구정최안과는 고객의 안전을 위해 최선을
                                다합니다.
                            </ConsentR1>
                        </Row>
                    </Column>
                    <ConsentTitle>회원가입약관</ConsentTitle>
                    <ConsentBox>{consent1}</ConsentBox>
                    <CheckRow>
                        <input
                            type="radio"
                            id="consent1_agree"
                            name="consent1"
                            value="true"
                            onChange={(e) => {
                                setAgree1(e.target.value)
                            }}
                            required="true"
                        />
                        <label
                            htmlFor="consent1_agree"
                            style={{ margin: '0 3rem 0 0.5rem' }}
                        >
                            동의합니다.
                        </label>
                        <input
                            type="radio"
                            id="consent1_disagree"
                            name="consent1"
                            value="false"
                            onChange={(e) => {
                                setAgree1(e.target.value)
                            }}
                        />
                        <label
                            htmlFor="consent1_disagree"
                            style={{ margin: '0 3rem 0 0.5rem' }}
                        >
                            동의하지 않습니다.
                        </label>
                    </CheckRow>
                    <ConsentTitle>개인정보취급방침</ConsentTitle>
                    <ConsentBox>{consent2}</ConsentBox>
                    <CheckRow>
                        <input
                            type="radio"
                            id="consent2_agree"
                            name="consent2"
                            value="true"
                            onChange={(e) => {
                                setAgree2(e.target.value)
                            }}
                            required="true"
                        />
                        <label
                            htmlFor="consent2_agree"
                            style={{ margin: '0 3rem 0 0.5rem' }}
                        >
                            동의합니다.
                        </label>
                        <input
                            type="radio"
                            id="consent2_disagree"
                            name="consent2"
                            value="false"
                            onChange={(e) => {
                                setAgree2(e.target.value)
                            }}
                        />
                        <label
                            htmlFor="consent2_disagree"
                            style={{ margin: '0 3rem 0 0.5rem' }}
                        >
                            동의하지 않습니다.
                        </label>
                    </CheckRow>
                    <Row
                        style={{
                            alignItems: 'center',
                            width: '100%',
                            justifyContent: 'center',
                        }}
                    >
                        <Submit type="submit">
                            <div>회원가입</div>
                        </Submit>
                    </Row>
                </SignupContainer>
            </SignUpWrapper>
        </>
    )
}

export default Signup
