import React, { useContext, Fragment, useEffect, useState, useRef } from 'react'
import { useLocation, Link, useParams } from 'react-router-dom'
import Media from 'react-media'
import firebase from 'firebase/app'
import {
    ReviewPageContainer,
    ReviewPageWrapper,
    ReviewPageSec1,
    ReviewPageSec1Text,
    ReviewPageSec1Img,
    ReviewPage,
    ReviewPageSec2,
} from './ReviewListMobile.components'
import {
    ReviewContainer,
    InfoGrid,
    TitleLabel,
    Title,
    SurgeryLabel,
    Surgery,
    NameLabel,
    Name,
    AgeLabel,
    Age,
    SexLabel,
    Sex,
    LeftSightLabel,
    LeftSight,
    RightSightLabel,
    RightSight,
    ContentBox,
    NavButtonContainer,
    ReviewNavigateButton,
    ButtonBar,
    ToListButton,
    WriteReviewButton,
} from './ReviewDescription.components'
import TopNav from '../TopNav.js'
import GreenCircleWithCheck from '../icon_components/GreenCircleWithCheck.js'
import { UserContext } from '../UserContext'
import useWindowDimensions from '../useWindowDimensions.js'
function ReviewDescription() {
    const { reviewType, slug } = useParams()
    const location = useLocation()
    const collectionId = location.state.collectionId
    const [reviewHeight, setReviewHeight] = useState(0)
    const [curReview, setCurReview] = useState(null)
    const [right, setRight] = useState(null)
    const [left, setLeft] = useState(null)
    const [leftLink, setLeftLink] = useState('')
    const [rightLink, setRightLink] = useState('')
    const [nextReview, setNextReview] = useState(null)
    const { width, height } = useWindowDimensions()
    const [content, setContent] = useState({
        title: '',
        surgeryType: '',
        name: '',
        sex: '',
        leftsight: '',
        rightsight: '',
    })
    const reviewPageRef = useRef()
    const db = firebase.firestore()
    const ref = db.collection(collectionId)
    useEffect(() => {
        ref.doc(slug)
            .get()
            .then((d) => {
                console.log(d)
                setCurReview(d)
                setContent(d.data())
            })
    }, [slug])

    // get next and prev review
    useEffect(() => {
        if (curReview !== null && curReview !== undefined) {
            console.log('fetch next')
            
            ref.orderBy('date',"desc")
                .where('show', '==', true)
                .startAfter(curReview)
                .limit(1)
                .onSnapshot((s) => {
                    if (s.size > 0) {
                        ref.doc(s.docs[0].id).get().then((e)=>{
                            setRight(e)
                            setRightLink(
                                '/review-description/' + reviewType + '/' + s.docs[0].id
                            )
                        })
                    }
                })
            ref.orderBy('date',"asc")
                .where('show', '==', true)
                .startAfter(curReview)
                .limit(1)
                .onSnapshot((s) => {
                    if (s.size > 0) {
                        ref.doc(s.docs[0].id).get().then((e)=>{
                            setLeft(e)
                            setLeftLink(
                                '/review-description/' + reviewType + '/' + s.docs[0].id
                            )
                        })
                    }
                })
        }
    }, [curReview])
    const { userInfo } = useContext(UserContext)

    useEffect(() => {
        setReviewHeight(reviewPageRef.current.clientHeight)
    }, [reviewPageRef])
    const scaleFactor = () => {
        if (width > 750) {
            return {}
        
        } else {
            return {
                transform: 'scale(' + width / 750 + ')',
                transformOrigin: 'top left',
                marginBottom: reviewHeight - 1355 + 'px',
            }
        }
    }
    return (
        <Fragment>
            <ReviewPageContainer>
                <TopNav />
                <ReviewPage style={scaleFactor()}>
                    <ReviewPageWrapper ref={reviewPageRef}>
                        <ReviewPageSec1>
                            <ReviewPageSec1Text>
                                <p>압구정최안과는</p>
                                <p>
                                    <span>안전한 수술</span>을 약속드립니다.
                                </p>
                                <Media queries={{ small: { maxWidth: 750 } }}>
                                    {(matches) =>
                                        matches.small ? (
                                            <div>
                                                <h3>23년 경력의 주치의,</h3>
                                                <h3>
                                                    1:1 맞춤진료로 만족도 높은
                                                    의료시스템
                                                </h3>
                                            </div>
                                        ) : (
                                            <h3>
                                                23년 경력의 주치의, 1:1
                                                맞춤진료로 만족도 높은
                                                의료시스템
                                            </h3>
                                        )
                                    }
                                </Media>
                            </ReviewPageSec1Text>
                            <ReviewPageSec1Img src="/surgery/Smile/smileinfo_human.png" />
                        </ReviewPageSec1>
                        <ReviewPageSec2>
                            <p>
                                압구정최안과
                                <span> 수술후기</span>
                            </p>
                            <div
                                className="information"
                                style={{
                                    alignItems: 'center',
                                    // marginTop: '1rem',
                                    // marginBottom: '0.5rem',
                                }}
                            >
                                <GreenCircleWithCheck className="green_circle_with_check" />
                                <p className="sec2_law">
                                    의료법 56조에 의거하여 개인인증 후 열람이
                                    가능합니다.
                                </p>
                            </div>
                           
                        </ReviewPageSec2>
                        <ReviewContainer>
                            <InfoGrid>
                                <TitleLabel>
                                    <div>제목</div>
                                </TitleLabel>
                                <Title>
                                    <div>{content.title}</div>
                                </Title>
                                <SurgeryLabel>
                                    <div>수술종류</div>
                                </SurgeryLabel>
                                <Surgery>
                                    <div>{content.surgeryType}</div>
                                </Surgery>
                                <NameLabel>
                                    <div>이름</div>
                                </NameLabel>
                                <Name>
                                    <div>{content.name}</div>
                                </Name>
                                <AgeLabel>나이</AgeLabel>
                                <Age>{content.age}</Age>
                                <SexLabel>성별</SexLabel>
                                <Sex>{content.sex}</Sex>
                                <LeftSightLabel>수술 후 좌안</LeftSightLabel>
                                <LeftSight>{content.leftsight}</LeftSight>
                                <RightSightLabel>수술 후 우안</RightSightLabel>
                                <RightSight>{content.rightsight}</RightSight>
                            </InfoGrid>
                            <ContentBox>{content.content}</ContentBox>
                        </ReviewContainer>
                        <ButtonBar>
                            <NavButtonContainer>
                                <ReviewNavigateButton
                                    onClick={(e) => {
                                        if (leftLink === '') {
                                            e.preventDefault()
                                            alert('첫번째 리뷰입니다.')
                                        }
                                    }}
                                    to={{
                                        pathname: leftLink,
                                        state: { collectionId: collectionId },
                                    }}
                                >
                                    <div className="leftArrow">{'<'}</div>
                                    <div>PREV</div>
                                </ReviewNavigateButton>
                                <ReviewNavigateButton
                                    to={{
                                        pathname: rightLink,
                                        state: { collectionId: collectionId },
                                    }}
                                    style={{ marginLeft: '1rem' }}
                                    onClick={(e) => {
                                        if (rightLink === '') {
                                            e.preventDefault()
                                            alert('마지막 리뷰입니다.')
                                        }
                                    }}
                                >
                                    <div>NEXT</div>
                                    <div className="rightArrow">{'>'}</div>
                                </ReviewNavigateButton>
                            </NavButtonContainer>
                            <NavButtonContainer style={{ marginLeft: 'auto' }}>
                                <ToListButton to={"/review/"+reviewType}>
                                    <div>목록</div>
                                </ToListButton>
                                {/* <WriteReviewButton to="/create-sightcorrection-review" onClick={(e)=>{ 
                                    if(userInfo.authority!=="admin"){
                                        e.preventDefault()
                                        alert("권한이 없습니다.")
                                    }
                                }}>
                                    <div>
                                        글쓰기
                                    </div>
                                </WriteReviewButton> */}
                            </NavButtonContainer>
                        </ButtonBar>
                    </ReviewPageWrapper>
                </ReviewPage>
            </ReviewPageContainer>
        </Fragment>
    )
}

export default ReviewDescription
