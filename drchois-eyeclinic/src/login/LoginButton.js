import React , {useContext, useState, useEffect, useCallBack}from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import firebase from 'firebase/app'
import 'firebase/auth'
import { FirebaseAuthConsumer } from '@react-firebase/auth'


import {UserContext} from "../UserContext"
const LoginButtonStyled = styled.button`
        width: 100px;
        height: 40px;
        border-radius: 40px;
        background-color: #63c3c4;
        border: none;
        color: #fff;
        font-family: NanumSquare_acR;
        font-size: 15px;
        position: absolute;
        bottom: 170px;
        left: 70px;
        cursor: pointer;
        
        `

function LoginButton() {

    const history = useHistory()

    console.log("login button initialize")
    const { userInfo, setUserInfo } = useContext(UserContext)

    const LoginProcess = ()=>{
        console.log("login")
        var provider = new firebase.auth.GoogleAuthProvider()
        const db = firebase.firestore().collection('userinfo')

        firebase.auth().signInWithPopup(provider).then((result)=>{
            console.log(result)
            // update userContext
            setUserInfo({
                login:true,
                email:result.user.email,
                phone_number : 'null',
                authority : 'null'
            })
            // 새로운 유저일 경우에 signup page로 이동한다
            if(result.additionalUserInfo.isNewUser){
                history.push("/signup")
                return
            }
            // 기존에 등록했던 유저인 경우
            // firebase에서 데이터 fetch 해서 userInfo 업데이트 해준다
            db.doc(result.user.uid).get().then((doc)=>{
                if(!doc.exists){
                    history.push("/signup")
                }
                else{

                    console.log(doc.data())
                    setUserInfo(
                        {login:true,
                            email:doc.data().email,
                            phone_number:doc.data().phone_number,
                            authority:doc.data().authority
                        
                        }
                    )
                }
            })
           

            


        })
    }

    const LogoutProcess = ()=>{
        firebase.auth().signOut()
        setUserInfo({login:false,email:"null",phone_number:"null",authority:"null"})

    }
    
    // useCallBack(() => {
        // var provider = new firebase.auth.GoogleAuthProvider()


        // firebase
        //     .auth()
        //     .signInWithPopup(provider)
        //     .then((result) => {
        //         // console.log(result.user)
        //         // console.log()
        //         setUserInfo({
        //             login: true,
        //             email: result.user.email,
        //             phone_number: 'default',
        //             authority: 'default',
        //         })
        //         if(!isUserRegistered){
        //             console.log('redirect to 회원가입')
        //             history.push('/signup')
        //         }
        //     })
    //     console.log("login")

        
    // },[])

    if(userInfo.login){
        return <LoginButtonStyled onClick={LogoutProcess}>로그아웃</LoginButtonStyled>
    }
    else{
        return <LoginButtonStyled onClick={LoginProcess}>로그인</LoginButtonStyled>
    }
}

export default LoginButton
