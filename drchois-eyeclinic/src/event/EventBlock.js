import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import firebase from 'firebase/app'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import useWindowDimensions from '../useWindowDimensions'
import { classifyEventStatus } from './ClassifyEventStatus'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined'
import { UserContext } from '../UserContext'

const NewTagD = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 30px;
    background-color: #ff7e00;
    font-family: NanumSquare_acB;
    font-size: 1rem;
    line-height: 2.2rem;
    color: white;
    text-align: center;
    margin-top: 24px;
`
const FinishedD = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 30px;
    background-color: #939393;
    font-family: NanumSquare_acB;
    font-size: 0.8rem;
    color: white;
    font-size: 1rem;
    line-height: 2.2rem;
    color: white;
    text-align: center;
    margin-top: 24px;
`
const InprocessD = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 30px;
    background-color: #63c3c4;
    font-family: NanumSquare_acB;
    font-size: 0.8rem;
    color: white;
    font-size: 1rem;
    line-height: 2.2rem;
    color: white;
    text-align: center;
    margin-top: 24px;
`
const WrapperDesktop = styled.div`
    width: 500px;
    height: 350px;
    display: grid;
    grid-template-rows: 250px 50px 50px;
    grid-template-columns: 80px 340px 80px;
    :first-child {
        border-right: 1px solid #aeaeae;
    }
    border: 1px solid;
`
const WrapperMobile = styled.div`
    width: 500px;
    height: 350px;
    display: grid;
    grid-template-rows: 250px 50px 50px;
    grid-template-columns: 80px 340px 80px;
    border-bottom: 1px solid #e4e4e4;
    margin-bottom:98px;
    :last-child{
        border-bottom: 3px solid #CDCDCD
    }
`


const TagContainerD = styled.div`
    display: flex;
    justify-content: center;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
`
const ThumbnailContainerD = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    color: #939393;
    :hover {
        color: #939393;
    }
    img {
        width: 340px;
        height: 197px !important;
        height: auto;
        box-shadow: 2.5px 4.33px 10px;
        :hover {
            box-shadow: 2.5px 4.33px 10px;

            color: #939393;
        }
    }
`
const TitleD = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    border-top: 1px solid #e4e4e4;
    font-family: NanumSquare_acB;
    color: #4a4a4a;
    font-size: 1.8rem;
    padding-left: 20px;
    padding-top: 20px;
`
const PeriodD = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    font-family: NanumSquare_ac;
    color: #767676;
    font-size: 1rem;
    margin-top: 15px;
    margin-left: 20px;
`
const ControlBlockD = styled.div`
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 4;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #707070;
    padding-left: 300px;
    a {
        color: #707070;
    }
    svg {
        width: 50px;
        transform: scale(1.5);
        cursor: pointer;
    }
`

// original size : 615 x 437 => 500 x 350 (ratio 0.8) gap : 250 50 50 / 80 340 80
export const StatusTagReturn = ({ start, end }) => {
    const status = classifyEventStatus(start, end)
    // status 값을 확인해보고 싶으면 아래 line을 uncomment
    // return <div>{status}</div>
    if (status === 'new') {
        return <NewTagD>NEW</NewTagD>
    } else if (status === 'ongoing') {
        return <InprocessD>진행중</InprocessD>
    } else if (status === 'end') {
        return <FinishedD>완료</FinishedD>
    } else {
        return <></>
    }
}
const deleteEvent = (id) => {
    if (window.confirm('이벤트를 삭제하시겠습니까?')) {
        // 이벤트 삭제
        const db = firebase.firestore()
        db.collection('event').doc(id).delete()
        alert('이벤트 삭제가 완료되었습니다.')
    } else {
        // 실수로 누른것임
        return
    }
}
function DesktopBlock({ id, data }) {
    const { userInfo, setUserInfo } = useContext(UserContext)

    return (
        <FirebaseAuthConsumer>
            <WrapperDesktop>
                <TagContainerD>
                    <StatusTagReturn
                        start={data.start_date}
                        end={data.end_date}
                    />
                </TagContainerD>
                <ThumbnailContainerD to={'/event-description/' + id}>
                    <img src={data.thumbnail_url} alt="thumbnail" />
                </ThumbnailContainerD>
                <TitleD>{data.title}</TitleD>
                <PeriodD>
                    {data.start_date.replaceAll('-', '.') +
                        '~' +
                        data.end_date.replaceAll('-', '.')}
                </PeriodD>
                {userInfo.authority==="admin"?(
                    <ControlBlockD>
                    <Link to={'/event-edit/' + id}>
                        <EditOutlinedIcon />
                    </Link>
                    <DeleteForeverOutlinedIcon
                        onClick={() => {
                            deleteEvent(id)
                        }}
                    />
                </ControlBlockD>
            ):(<></>)
                }
               
            </WrapperDesktop>
        </FirebaseAuthConsumer>
    )
}
function MobileBlock({ id, data }) {
    const { userInfo, setUserInfo } = useContext(UserContext)

    return (
        <FirebaseAuthConsumer>
            <WrapperMobile style={{transform:"scale(1.28)", transformOrigin:"top left"}}>
                <TagContainerD>
                    <StatusTagReturn
                        start={data.start_date}
                        end={data.end_date}
                    />
                </TagContainerD>
                <ThumbnailContainerD to={'/event-description/' + id}>
                    <img src={data.thumbnail_url} alt="thumbnail" />
                </ThumbnailContainerD>
                <TitleD>{data.title}</TitleD>
                <PeriodD>
                    {data.start_date.replaceAll('-', '.') +
                        '~' +
                        data.end_date.replaceAll('-', '.')}
                </PeriodD>
                {userInfo.authority==="admin"?(
                    <ControlBlockD>
                    <Link to={'/event-edit/' + id}>
                        <EditOutlinedIcon />
                    </Link>
                    <DeleteForeverOutlinedIcon
                        onClick={() => {
                            deleteEvent(id)
                        }}
                    />
                </ControlBlockD>
            ):(<></>)
                }
               
            </WrapperMobile>
        </FirebaseAuthConsumer>
    )
}

function EventBlock({ data, id }) {
    const { height, width } = useWindowDimensions()
   
    if (width >= 800) {
        return <DesktopBlock data={data} id={id} />
    } else {
        return <MobileBlock data={data} id={id} />
    }
}

export default EventBlock
