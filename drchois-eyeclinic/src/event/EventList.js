import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import EventBlock from './EventBlock'
import TopNav from '../TopNav'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import FastForwardIcon from '@material-ui/icons/FastForward'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import { PageNumberIndex } from '../sightcorrection_review/ReviewList.components'
const Wrapper = styled.div`
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
const Table = styled.div`
margin-top:20px;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 50px;
`
export const Header = styled.div`
    display: flex;
    flex-direction: Row;
    width: 1000px;
    min-height: 267px;
    height: 267px;
    align-self: center;
    margin-top: 100px;
    font-family: NanumSquare_acB;
    font-size: 2.5rem;
    color: #707070;
    div {
        height: 50px;
    }
`
export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`
export const HeaderMintText = styled.div`
    color: #63c3c4;
`

export const HeaderImg = styled.img`
    margin-left: auto;
    height: 267px;
`
const EventRowStyled = styled(Row)`
:first-child{
    border-top:4px solid #63C3C4;
}
    border-bottom: 1px solid #e4e4e4;
    :last-child {
        border-bottom: 1px solid #aeaeae;
    }
`
const EmptyEventBlock = styled.div`
    min-width: 500px;
    min-height: 350px;
`
const EventPageTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width:1000px;
    align-self:center;
`
const GreenBox = styled.div`
    width: 40px;
    height: 4px;
    background-color: #63C3C4;
    margin-bottom : 10px;
`
const EventPageTitle = styled.div`
font-family: NanumSquare_acB;
    font-size: 2.5rem;
    color: #707070;
`
const PageNavContainer = styled.div`
    align-self:center;
    display:flex;
    flex-direction : row;
`

function EventList() {
    const [curPage, setCurPage] = useState(1)
    const [htmlData, setHtmlData] = useState('')
    const [eventInfoList, setEventInfoList] = useState([])
    const [eventIdList, setEventIdList] = useState([])
    const [eventTitleList, setEventTitleList] = useState([])
    const [pageNumberList, setPageNumberList] = useState([])
    useEffect(() => {
        var tmpEventIdList = []
        var tmpEventTitleList = []
        var tmpEventInfoList = []
        var tmpPageNumberList = []
        const db = firebase.firestore()
        const collection = db.collection('event')
        collection
            .orderBy('timestamp_end_date', 'desc')
            .onSnapshot((querySnapShot) => {
                querySnapShot.docs.forEach((d, i) => {
                    tmpEventInfoList.push(d.data())
                    tmpEventIdList.push(d.id)
                    tmpEventTitleList.push(d.data().end_date)
                    // 첫 event부터 페이지 1이 추가되고 8개마다 1페이지씩 더 추가됨
                    if(i%8===0){tmpPageNumberList.push(Math.trunc(i/8)+1)}
                    
                })
                setEventInfoList(tmpEventInfoList)
                setEventIdList(tmpEventIdList)
                setEventTitleList(tmpEventTitleList)
                setPageNumberList(tmpPageNumberList)
            })
    }, [])

    const EventRow = ({ idx }) => {
        var ret = []
        for (var i = idx * 2; i < idx * 2 + 2; i++) {
            if (eventInfoList[i] !== undefined) {
                ret.push(
                    <EventBlock id={eventIdList[i]} data={eventInfoList[i]} />
                )
            }
            else{
                ret.push(<EmptyEventBlock/>)
            }
        }
        return <EventRowStyled>{ret}</EventRowStyled>
    }

    const EventTable = () => {
        var ret = []
        for (var i = 4 * (curPage - 1); i < 4 * curPage; i++) {
            if (eventIdList[i * 2] !== undefined) {
                ret.push(<EventRow idx={i} />)
            }
        }
        return <Table>{ret}</Table>
    }
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
            <EventPageTitleContainer>
                <GreenBox/>
                <EventPageTitle>진행중인 이벤트</EventPageTitle>
            </EventPageTitleContainer>
            {EventTable()}
            <PageNumberIndex>
                            <FastRewindIcon 
                               onClick={(e) => {
                                if (curPage === 1) {
                                    alert('첫번째 페이지입니다.')
                                } else {
                                    setCurPage(1)
                                }
                            }}
                            />
                            <ArrowLeftIcon
                                style={{
                                    transform: 'scale(1.6,1.2)',
                                    marginLeft: '1.5rem',
                                    marginRight:'1rem'
                                }}
                                onClick={(e) => {
                                    if (curPage === 1) {
                                        alert('첫번째 페이지입니다.')
                                    } else {
                                        setCurPage(curPage - 1)
                                    }
                                }}
                            />
                            {pageNumberList.map((x, i) => (
                                <div
                                    key={x}
                                    className={
                                        'pageIndex' + ' ' + (curPage === i+1)
                                    }
                                    onClick={(x) => {
                                        setCurPage(i+1)
                                    }}
                                >
                                    {i + 1}
                                </div>
                            ))}
                            <ArrowRightIcon
                                style={{
                                    transform: 'scale(1.6,1.2)',
                                    marginRight: '1.5rem',
                                    marginLeft : '1rem'
                    
                                }}
                                onClick={(e) => {
                                    if (curPage === pageNumberList.length) {
                                        alert('마지막 페이지입니다.')
                                    } else {
                                        setCurPage(curPage + 1)
                                    }
                                }}
                            />
                            <FastForwardIcon
                                onClick={(e) => {
                                    if (curPage === pageNumberList.length ) {
                                        alert('마지막 페이지입니다.')
                                    } else {
                                        setCurPage(pageNumberList.length )
                                    }
                                }}
                            />
                        </PageNumberIndex>
          
        </Wrapper>
    )
}

export default EventList
