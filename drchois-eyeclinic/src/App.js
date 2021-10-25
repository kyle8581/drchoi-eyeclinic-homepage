import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import ReactGa from 'react-ga'

import Home from './Home'
import SightCorrectionSurgery from './sightcorrection/SightCorrectionSurgery'
import DoctorHome from './doctor-ment/DoctorHome'
import NoanHome from './noan/NoanHome'
import NoPay from './no-pay/NoPay'
import Icl from './icl/Icl'
import Foreign from './translation/Foreign'
import TestProcess from './test-process/TestProcess'
import DreamLens from './dream-lens/DreamLens'
import Signup from './signup/Signup'
// for firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseAnalytics, firebaseConfig } from './firebase'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import { UserContext } from './UserContext'
import { SlideContext } from './SlideContext'
import { SightCorrectionSlideContext } from './SightCorrectionSlideContext'
import { NoanSlideContext } from './NoanSlideContext'
// 리뷰
import ReviewList from './review/ReviewList'
import ReviewCreate from './review/ReviewCreate'
import ReviewDescription from './review/ReviewDescription'
// 이벤트
import EventEdit from './event/EventEdit'
import EventDescription from './event/EventDescription'
import EventList from './event/EventList'
// 팝업
import PopupEdit from './popup/PopupEdit'
import testpage from './testpage'
import { MemoPopupElement } from './popup/PopupElement'
import Rgp from './rgp/Rgp'



// firebase.initializeApp(firebaseConfig)
// const PopupElement = lazy(() => (
//     import('./popup/PopupElement')
// ))
function App() {
    
    useEffect(()=>{
        firebaseAnalytics.logEvent("homepage visited")
    })
    const [userInfo, setUserInfo] = useState({
        login: false,
        email: 'none',
        phone_number: 'none',
        authority: 'default',
    })
    const [curSlide, setCurslide] = useState(0)
    const [pageState, setPageState] = useState('lasik')
    const [noanPageState, setNoanPageState] = useState('cataract')
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
                        <NoanSlideContext.Provider
                            value={{ noanPageState, setNoanPageState }}
                        >
                            <Suspense fallback={<div>loading</div>}>
                                <MemoPopupElement />
                            </Suspense>
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
                                <Route path="/rgp" component={Rgp} />
                                <Route
                                    path="/test-process"
                                    component={TestProcess}
                                />
                                <Route
                                    path="/dream-lens"
                                    component={DreamLens}
                                />
                                <Route
                                    path="/signup"
                                    component={Signup}
                                ></Route>
                                {/* :reviewType에 따라서 노안후기/시력교정술 후기 route */}
                                <Route
                                    path="/review/:reviewType"
                                    component={ReviewList}
                                    exact={true}
                                />
                                <Route
                                    path="/review-create/:reviewType"
                                    component={ReviewCreate}
                                ></Route>
                                <Route
                                    path="/review-description/:reviewType/:slug"
                                    component={ReviewDescription}
                                ></Route>
                                <Route
                                    path="/foreign/:language"
                                    component={Foreign}
                                />
                                <Route
                                    path="/event-list"
                                    component={EventList}
                                />
                                <Route
                                    path="/event-create"
                                    component={EventEdit}
                                />
                                <Route
                                    path="/event-description/:eventID"
                                    component={EventDescription}
                                />
                                <Route
                                    path="/event-edit/:eventSlug"
                                    component={EventEdit}
                                />
                                <Route
                                    path="/popup-edit"
                                    component={PopupEdit}
                                />
                                <Route path="/test" component={testpage} />
                            </BrowserRouter>
                        </NoanSlideContext.Provider>
                    </SightCorrectionSlideContext.Provider>
                </SlideContext.Provider>
            </UserContext.Provider>
        </FirebaseAuthProvider>
    )
}

export default App
