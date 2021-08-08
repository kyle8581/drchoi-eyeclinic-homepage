import React, {useContext} from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
    ReviewPageContainer,
    ReviewPageWrapper,
    ReviewPage_sec1,
    ReviewPage_sec1_text,
    ReviewPage_sec1_img,
    ReviewPage,
    ListContainer,
    ReviewPage_sec2,
} from './ReviewList.components'
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
    ToListButton,WriteReviewButton
} from './ReviewDescription.components'
import TopNav from '../TopNav.js'
import GreenCircleWithCheck from '../icon_components/GreenCircleWithCheck.js'
import { UserContext  } from '../UserContext'

function ReviewDescription() {
    const location = useLocation()
    const curIndex = location.state.idx
    const content = location.state.e
    const left = location.state.allList[curIndex - 1]
    const right = location.state.allList[curIndex + 1]
    const allList = location.state.allList
    const leftIndex = curIndex - 1
    const rightIndex = curIndex + 1
    let leftLink = ''
    let rightLink = ''
    const {userInfo } = useContext(UserContext)
    if (left === undefined) {
        leftLink = '/sight-correction-review/description/' + content.id
    } else {
        leftLink = '/sight-correction-review/description/' + left.id
    }
    if (right === undefined) {
        rightLink = '/sight-correction-review/description/' + content.id
    } else {
        rightLink = '/sight-correction-review/description/' + right.id
    }
    return (
        <>
            <ReviewPageContainer>
                <TopNav />
                <ReviewPage>
                    <ReviewPageWrapper>
                        <ReviewPage_sec1>
                            <ReviewPage_sec1_text>
                                <p>압구정최안과는</p>
                                <p>
                                    <span>안전한 수술</span>을 약속드립니다.
                                </p>
                                <h3>
                                    23년 경력의 주치의, 1:1 맞춤진료로 만족도
                                    높은 의료시스템
                                </h3>
                            </ReviewPage_sec1_text>
                            <ReviewPage_sec1_img src="/surgery/Smile/smileinfo_human.png" />
                        </ReviewPage_sec1>
                        <ReviewPage_sec2>
                            <p>
                                압구정최안과
                                <span> 수술후기</span>
                            </p>
                            <div
                                className="information"
                                style={{
                                    alignItems: 'center',
                                    marginTop: '1rem',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                <GreenCircleWithCheck className="green_circle_with_check" />
                                <p style={{ marginLeft: '1rem' }}>
                                    의료법 56조에 의거하여 개인인증 후 열람이
                                    가능합니다.
                                </p>
                            </div>
                        </ReviewPage_sec2>
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
                                <LeftSight>{content.leftSight}</LeftSight>
                                <RightSightLabel>수술 후 우안</RightSightLabel>
                                <RightSight>{content.rightSight}</RightSight>
                            </InfoGrid>
                            <ContentBox>{content.content}</ContentBox>
                        </ReviewContainer>
                        <ButtonBar>
                            <NavButtonContainer>
                                <ReviewNavigateButton
                                    onClick={(e) => {
                                        if (left === undefined) {
                                            e.preventDefault()
                                            alert('첫번째 리뷰입니다.')
                                        }
                                    }}
                                    to={{
                                        pathname: leftLink,
                                        state: {
                                            e: left,
                                            idx: leftIndex,
                                            allList: allList,
                                        },
                                    }}
                                >
                                    <div className="leftArrow">{'<'}</div>
                                    <div>PREV</div>
                                </ReviewNavigateButton>
                                <ReviewNavigateButton
                                    to={{
                                        pathname: rightLink,
                                        state: {
                                            e: right,
                                            idx: rightIndex,
                                            allList: allList,
                                        },
                                    }}
                                    style={{ marginLeft: '1rem' }}
                                    onClick={(e) => {
                                        if (right === undefined) {
                                            e.preventDefault()
                                            alert('마지막 리뷰입니다.')
                                        }
                                    }}
                                >
                                    <div>NEXT</div>
                                    <div className="rightArrow">{'>'}</div>
                                </ReviewNavigateButton>
                            </NavButtonContainer>
                            <NavButtonContainer style={{"marginLeft":"auto"}}>
                                <ToListButton to="/sight-correction-review">
                                    <div>
                                        목록
                                    </div>
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
        </>
    )
}

export default ReviewDescription
