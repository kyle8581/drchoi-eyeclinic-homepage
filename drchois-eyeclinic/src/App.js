import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import ReactGa from 'react-ga'

import Home from './Home'
import SightCorrectionSurgery from './sightcorrection/SightCorrectionSurgery'
import DoctorHome from './doctor-ment/DoctorHome'
import NoanHome from './noan/NoanHome'
import NoPay from './no-pay/NoPay'
import Icl from './icl/Icl'
import Foreign from './Foreign'
import TestProcess from './test-process/TestProcess'
import DreamLens from './dream-lens/DreamLens'
import Signup from './signup/Signup'
// for firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import { UserContext } from './UserContext'
import { SlideContext } from './SlideContext'
import { SightCorrectionSlideContext } from './SightCorrectionSlideContext'
import ReviewList from './sightcorrection_review/ReviewList'
import ReviewCreate from './sightcorrection_review/ReviewCreate'
import ReviewDescription from './sightcorrection_review/ReviewDescription'
import Event from './event/Event'
import EditorContainer from './event/EditorContainer'
import EventDescription from './event/EventDescription'
import EventList from './event/EventList'
import EventModify from './event/EventModify'
import PopupEdit from './popup/PopupEdit'
const firebaseConfig = {
    apiKey: 'AIzaSyArAzMQJPh9WuSk9eMaBzP38DhuAK2p41I',
    authDomain: 'drchoi-eyeclinic-homepage.firebaseapp.com',
    projectId: 'drchoi-eyeclinic-homepage',
    storageBucket: 'drchoi-eyeclinic-homepage.appspot.com',
    messagingSenderId: '153536395761',
    appId: '1:153536395761:web:6bda81c9e29e2af7d16c50',
    measurementId: 'G-R8RJT7N8XS',
}

firebase.initializeApp(firebaseConfig)

function App() {
    const [userInfo, setUserInfo] = useState({
        login: false,
        email: 'none',
        phone_number: 'none',
        authority: 'default',
    })
    const [curSlide, setCurslide] = useState(0)
    const [pageState, setPageState] = useState('lasik')
    // module not found error 때문에 잠깐 comment out 했음
    // useEffect(()=>{
    //     ReactGa.initialize('G-R8RJT7N8XS');
    //     ReactGa.pageview("/")
    // })
    return (
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
            <UserContext.Provider value={{ userInfo, setUserInfo }}>
                <SlideContext.Provider value={{ curSlide, setCurslide }}>
                    <SightCorrectionSlideContext.Provider
                        value={{ pageState, setPageState }}
                    >
                        <BrowserRouter>
                            <Route
                                path="/sight-correction"
                                component={SightCorrectionSurgery}
                            />
                            <Route path="/cataract" component={NoanHome} />
                            <Route path="/" exact={true} component={Home} />
                            <Route path="/dr-choi" component={DoctorHome} />
                            <Route path="/no-pay" component={NoPay} />
                            <Route path="/icl" component={Icl} />
                            <Route
                                path="/test-process"
                                component={TestProcess}
                            />
                            <Route path="/dream-lens" component={DreamLens} />
                            <Route path="/signup" component={Signup}></Route>
                            <Route
                                path="/sight-correction-review"
                                exact={true}
                                component={ReviewList}
                            />
                            <Route
                                path="/create-sightcorrection-review"
                                component={ReviewCreate}
                            ></Route>
                            <Route
                                path="/sight-correction-review/description/:slug"
                                component={ReviewDescription}
                            ></Route>
                            <Route path="/foreign" component={Foreign} />
                            <Route path="/event-list" component={EventList} />
                            <Route
                                path="/createEvent"
                                component={EditorContainer}
                            />
                            {/* <Route path="/event-description" component={EventDescription}/> */}
                            <Route
                                path="/event-description/:eventID"
                                component={EventDescription}
                            />
                            <Route
                                path="/event-modify/:eventID"
                                component={EventModify}
                            />
                            <Route path="/popup-edit" component={PopupEdit} />
                        </BrowserRouter>
                    </SightCorrectionSlideContext.Provider>
                </SlideContext.Provider>
            </UserContext.Provider>
        </FirebaseAuthProvider>
    )
}

export default App
