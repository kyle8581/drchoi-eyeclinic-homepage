import React, { useState, useEffect, useRef, useCallback } from 'react'
import firebase from 'firebase/app'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import EventBlock from './EventBlock'
import TopNav from '../TopNav'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import FastForwardIcon from '@material-ui/icons/FastForward'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import { PageNumberIndex } from '../review/ReviewList.components'
import { firebaseAnalytics } from '../firebase'
import useWindowDimensions from '../useWindowDimensions'
const Wrapper = styled.div`
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
const Table = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-bottom: 50px;
    width: 640px;
    /* border:1px solid; */
`
export const Header = styled.div`
    display: flex;
    flex-direction: Row;
    width: 640px;
    min-height: 210px;
    height: 210px;
    align-self: center;
    margin-top: 100px;
    font-family: NanumSquare_acB;
    font-size: 2rem;
    color: #707070;
    div {
        height: 50px;
    }
`
export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`
export const HeaderMintText = styled.div`
    color: #63c3c4;
`

export const HeaderImg = styled.img`
    margin-left: auto;
    height: 210px;
`
const EventRowStyled = styled(Row)`
    :first-child {
        border-top: 4px solid #63c3c4;
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
    min-width: 640px;
    align-self: center;
`
const GreenBox = styled.div`
    width: 30px;
    height: 4px;
    background-color: #63c3c4;
    margin-bottom: 10px;
`
const EventPageTitle = styled.div`
    font-family: NanumSquare_acB;
    font-size: 2rem;
    color: #707070;
`
const PageNavContainer = styled.div`
    align-self: center;
    display: flex;
    flex-direction: row;
`

function EventListMobile() {
    const [curPage, setCurPage] = useState(1)
    const [htmlData, setHtmlData] = useState('')
    const [eventInfoList, setEventInfoList] = useState([])
    const [eventIdList, setEventIdList] = useState([])
    const [eventTitleList, setEventTitleList] = useState([])
    const [pageNumberList, setPageNumberList] = useState([])
    const { height, width } = useWindowDimensions()
    const [tableHeight, setTableHeight] = useState(0)
    const tableRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const [curAmount, setCurAmount] = useState(0)

    

    useEffect(() => {
        firebaseAnalytics.logEvent("mobile event page visited")

        setTableHeight(tableRef.current.clientHeight)
    },[])
    useEffect(() => {
        var tmpEventIdList = []
        var tmpEventTitleList = []
        var tmpEventInfoList = []
        var tmpPageNumberList = []
        const db = firebase.firestore()
        const collection = db.collection('event')
        collection
        .where('show', "==", true)
            .orderBy('timestamp_end_date', 'desc')
            .onSnapshot((querySnapShot) => {
                querySnapShot.docs.forEach((d, i) => {
                    tmpEventInfoList.push(d.data())
                    tmpEventIdList.push(d.id)
                    tmpEventTitleList.push(d.data().end_date)
                    // 첫 event부터 페이지 1이 추가되고 8개마다 1페이지씩 더 추가됨
                    if (i % 8 === 0) {
                        tmpPageNumberList.push(Math.trunc(i / 8) + 1)
                    }
                })
                setEventInfoList(tmpEventInfoList)
                setEventIdList(tmpEventIdList)
                setEventTitleList(tmpEventTitleList)
                setPageNumberList(tmpPageNumberList)
                setCurAmount(4)
            })
    }, [])


    const EventComponents = ()=>{
        var tmpEventList = []
        for(var i=0;i<curAmount;i++){
            if(eventIdList[i]===undefined || eventInfoList[i]===undefined){
                break;
            }
            if(i+1===curAmount){
                tmpEventList.push(<EventBlock idx={eventIdList[i]} id={eventIdList[i]} data={eventInfoList[i]} key={i}/>)
            }
            else{

                tmpEventList.push(<EventBlock idx={eventIdList[i]} id={eventIdList[i]} data={eventInfoList[i]} key={i}/>)
            }
        }
        return tmpEventList

    }
    const addAmount = () =>{
        if(curAmount+4 > eventIdList.length){
            setCurAmount(eventIdList.length)
            return
        }
        else{
            setCurAmount(curAmount+4)
        }
    }


    return (
        <Wrapper onScroll={(e)=>{
            if(e.target.scrollHeight > e.target.clientHeight){
                const bottom = e.target.scrollHeight - e.target.scrollTop < e.target.clientHeight * 1.05
                if(bottom){
                    console.log("bottom")
                    console.log(e.target.scrollHeight)
                    console.log(e.target.scrollHeight-e.target.scrollTop)
                    addAmount()
                }
            }
        }}>
            <TopNav />
            <Header style={{ transform: 'scale(' + width / 750 + ')', marginBottom:-210*(1-width/750),transformOrigin:"top center" }}>
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
            <EventPageTitleContainer
                style={{ transform: 'scale(' + width / 750 + ') ' }}
            >
                <GreenBox />
                <EventPageTitle>진행중인 이벤트</EventPageTitle>
            </EventPageTitleContainer>
            <Table
                ref={tableRef}
                style={{
                    transform: 'scale(' + width / 750 + ') ',
                    transformOrigin: 'top center',
                    marginBottom:
                        curAmount * (450 * (width / 750)) - curAmount*450 + 'px',
                }}
            >
                {EventComponents()}
            </Table>
           
            
        </Wrapper>
    )
}

export default EventListMobile
