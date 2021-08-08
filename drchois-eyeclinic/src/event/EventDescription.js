import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import TopNav from '../TopNav'
import { StatusTagReturn } from './EventBlock'
import { Header, HeaderText, Row, HeaderImg, HeaderMintText } from './EventList'
import {
    NavButtonContainer,
    ReviewNavigateButton,
    ButtonBar,
    ToListButton,
    WriteReviewButton,
} from '../sightcorrection_review/ReviewDescription.components'
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`

const EventInfoContainer = styled.div`
    width: 1000px;
    align-self: center;
    display: flex;
    flex-direction: column;
    border-top: 4px solid #63c3c4;
    border-bottom: 1px solid #aeaeae;
    color: #707070;
`
const EventInfoRow1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 1000px;
    height: 60px;
    background-color: #eeeeee;
    font-family: NanumSquare_acB;
    font-size: 1.5rem;
    padding-left: 50px;
    align-items: center;
    div {
        :first-child {
            margin: 0;
        }
    }
    .event-title {
        margin-left: 10px;
    }
`
const EventInfoRow2 = styled.div`
    width: 1000px;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 50px;
    .event-period-key {
        font-family: NanumSquare_acB;
        font-size: 1rem;
    }
    .event-period-value {
        font-family: NanumSquare_acR;
        font-size: 0.8rem;
        margin-left: 10px;
    }
    .views-count {
        margin-left: auto;
        font-family: NanumSquare_acB;
    }
`
const ContentContainer = styled.div`
    margin-top: 40px;
    align-self: center;
    display: flex;
    width: 1000px;
    img {
        width: 1000px;
        /* margin-bottom:60px; */
    }

`
const EventToList = styled(ToListButton)`
    background-color: #CCCCCC;
    color:#FFF;
    border : none;
`
const EventButtonBar = styled(ButtonBar)`
    border-top:4px solid #CCC;
    border-bottom:none;
    padding-top:40px;
    /* border:none; */
    width:1000px;
    align-self:center;
    /* padding:0; */
    margin-bottom:60px;
`
// 이전 이벤트, 다음 이벤트 id는 firestore에 접속해서 얻기로 했음
// url 파라미터로 받을 필요없음
function EventDescription() {
    const [eventIdList, setEventIdList] = useState([])
    const [nextEvent, setNextEvent] = useState('')
    const [prevEvent, setPrevEvent] = useState('')
    const [curPageIdx, setCurPageIdx] = useState(0)
    const [curEvent, setCurEvent] = useState('')
    const [data, setData] = useState({
        start_date: '',
        end_date: '',
        title: '',
        has_link: 'false',
        views: 0,
    })
    console.log(curEvent)
    useEffect(() => {
        setCurEvent(window.location.href.split('/').slice(-1)[0])
    })
    useEffect(() => {
        if (curEvent !== '') {
            const db = firebase.firestore().collection('event')
            const doc = db.doc(curEvent)
            // console.log(eventID)
            doc.get().then((e) => {
                setData(e.data())

                console.log(data)
                // fetch html data
                // setHtmlData(draftToHtml(JSON.parse(e.data().content)))
            })
        }
    }, [curEvent])
    useEffect(() => {
        if(curEvent!==""){

            const db = firebase.firestore().collection('event')
            const doc = db.doc(curEvent)
            if (data.title !== '') {
                console.log('update view')
                doc.update({ views: data.views + 1 })
                var tmpEventIdList = []
                db.orderBy('timestamp_end_date', 'desc').onSnapshot(
                    (querySnapShot) => {
                        querySnapShot.docs.forEach((d, i) => {
                            tmpEventIdList.push(d.id)
                            if (d.id === curEvent) {
                                setCurPageIdx(i)
                            }
                            // 첫 event부터 페이지 1이 추가되고 8개마다 1페이지씩 더 추가됨
                        })
                        setEventIdList(tmpEventIdList)
                    }
                )
            }
        }
    }, [data])
    useEffect(() => {
        setNextEvent(eventIdList[curPageIdx + 1])
        setPrevEvent(eventIdList[curPageIdx - 1])
    }, [eventIdList])

    return (
        <Wrapper>
            <TopNav />
            <Header>
                <HeaderText>
                    <Row>
                        <div>압구정최안과는 고객님을 위해</div>
                    </Row>
                    <Row>
                        <HeaderMintText>다양한 이벤트</HeaderMintText>
                        <div>를 준비하고 있습니다.</div>
                    </Row>
                </HeaderText>
                <HeaderImg src="/event/header_img.png" />
            </Header>
        

            <EventInfoContainer>
                <EventInfoRow1>
                    <StatusTagReturn
                        start={data.start_date}
                        end={data.end_date}
                    />
                    <div className="event-title">{data.title}</div>
                </EventInfoRow1>
                <EventInfoRow2>
                    <div className="event-period-key">이벤트 기간</div>
                    <div className="event-period-value">
                        {' '}
                        {data.start_date.replaceAll('-', '.') +
                            '~' +
                            data.end_date.replaceAll('-', '.')}
                    </div>
                    <div className="views-count">{'조회수 ' + data.views}</div>
                </EventInfoRow2>
            </EventInfoContainer>
            <ContentContainer>
                {data.hasLink ? (
                    <a href={data.link}>
                        <img src={data.image_url} alt="content" />
                    </a>
                ) : (
                    <img src={data.image_url} alt="content" />
                )}
            </ContentContainer>
            <EventButtonBar>
                <NavButtonContainer>
                    <ReviewNavigateButton
                        onClick={(e) => {
                            if (prevEvent === undefined) {
                                e.preventDefault()
                                alert('첫번째 리뷰입니다.')
                            }
                        }}
                        to={'/event-description/' + prevEvent}
                    >
                        <div className="leftArrow">{'<'}</div>
                        <div>PREV</div>
                    </ReviewNavigateButton>
                    <ReviewNavigateButton
                        to={'/event-description/' + nextEvent}
                        style={{ marginLeft: '1rem' }}
                        onClick={(e) => {
                            if (nextEvent === undefined) {
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
                    <EventToList to="/event-list">
                        <div>목록</div>
                    </EventToList>
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
               
            </EventButtonBar>
        </Wrapper>
    )
}

export default EventDescription
