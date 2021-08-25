import styled from 'styled-components/macro'
import React, { useContext, Fragment } from 'react'
import firebase from 'firebase/app'
import { UserContext } from '../UserContext'
import { Link } from 'react-router-dom'
import Media from 'react-media'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined'
const ReviewBlockWrapper = styled(Link)`
    width: 1100px;
    height: 195px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    /* justify-content: center; */
    align-items: center;

    @media screen and (max-width: 750px) {
        width: 600px;
        height: 160px;
    }
    @media screen and (max-width: 650px) {
        width: 500px;
    }
    @media screen and (max-width: 500px) {
        width: 100vw;
        height: 100px;
    }
`
const ReviewBlockContainer = styled.div`
    width: 1000px;
    text-decoration: none;
    display: grid;
    grid-template-columns: 3fr 1fr 5fr;
    @media screen and (max-width: 750px) {
        width: 600px;
        grid-template-columns: 330px 270px;
        height: 160px;
    }
    @media screen and (max-width: 650px) {
        width: 500px;
        grid-template-columns: 270px 230px;
        height: 160px;
    }
    @media screen and (max-width: 500px) {
        width: 100vw;
        grid-template-columns: 1fr 1fr;
        height: 100px;
    }
`
const ReviewBlock_col1_wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #707070;
    @media screen and (max-width: 750px) {
        height: 160px;
        border-right: 1px solid #707070;
        width: 330px;
    }
    @media screen and (max-width: 650px) {
        width: 270px;
    }
    @media screen and (max-width: 500px) {
        width: 50vw;
        height: 100px;
    }
`
const ReviewBlock_col1 = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.2fr 1fr 0.1fr 1fr;
    font-family: NanumSquare_acR;
    color: #707070;
    .box1 {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    .box2 {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
        padding-left: 0.8rem;
        .tags {
            font-family: NanumSquare_acR;
            font-size: 0.8rem;
        }
        .tags_sex {
            font-family: NanumSquare_acR;
            font-size: 0.8rem;
            margin-left: 1rem;
        }
    }
    .box3 {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 4;
        grid-row-end: 5;
    }
    @media screen and (max-width: 750px) and (min-width: 651px){
        width: 300px;
        height: 135px;
        grid-template-rows: 0px 60px 10px 65px;
        grid-template-columns: 80px 220px;

        .box1 {
            img {
                width: 80px;
            }
        }
        .box2 {
            .tags,
            .tags_sex {
                font-size: 13px;
            }
            .tags_sex {
                margin-left: 2px;
            }
            span {
                font-size: 15px;
            }
        }
        .box3 {
            grid-column-start: 1;
            grid-column-end: -1;
            display: flex;
            /* justify-content:center; */
            align-items: center;
            font-size: 8px;
        }
    }
    @media screen and (max-width: 650px) and (min-width: 501px){
        width: 90%;
        height: 100%;
        grid-template-rows: 0.2fr 1fr 0.05fr 1fr;
        .box1{
            img{
                width: 100%;
            }
        }
    }
    @media screen and (max-width: 500px) {
        width: 90%;
        height: 100px;
        grid-template-rows: 5px 40px 5px 45px;
        .box1{
            img{
                width: 11vw;
            }
        }
        .box2 {
            padding-left: 0;
            span {
                font-size: 3vw;
            }
            .blank{
                display: none;
            }
            .tags, .tags_sex{
                font-size: 2vw;
            }
        }
    }
`
const SightScore = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 2fr 2.5fr;
    /* justify-content:center;
        align-items:center; */
    border-bottom: 2px solid #acacac;
    border-top: 2px solid #acacac;
    text-align: center;
    .title {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 2;
        background-color: #ededed;
        border-bottom: 2px solid #acacac;
        top: 50%;
        height: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
        background-color: #ededed;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .leftscore {
        font-family: NanumSquare_acEB;
        font-size: 1.5rem;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .right {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
        background-color: #ededed;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .rightscore {
        font-family: NanumSquare_acEB;
        font-size: 1.5rem;
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 3;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width: 750px) {
        width: 270px;
        grid-column-start: 1;
        grid-column-end: -1;
        font-size: 12px;
        font-family: NanumSquare_acB;
        border-bottom: 1px solid #acacac;
        border-top: 1px solid #acacac;
        height: 100%;
        .title {
            height: auto;
        }
        .leftscore {
            font-size: 18px;
            font-family: NanumSquare_acEB;
        }
        .rightscore {
            font-size: 18px;

            font-family: NanumSquare_acEB;
        }
    }
    @media screen and (max-width: 650px) and (min-width: 501px){
        width: 240px;
        height: 60px;
    }
    @media screen and (max-width: 500px) {
        width: 45vw;
        .title{
            font-size: 3vw;
        }
        .leftscore, .rightscore{
            font-size: 3.5vw;
        }
    }
    @media screen and (max-width: 400px){
        .title{
            font-size: 3.5vw;
        }
        .leftscore, .rightscore{
            font-size: 4vw;
        }
    }
`
const ReviewBlock_col2 = styled.div`
    border-right: 2px solid #707070;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 80%;
    }
`
const ReviewBlock_col3 = styled.div`
    font-family: NanumSquare_acEB;
    color: #707070;
    display: flex;
    justify-content: center;
    align-items: center;
    .col3_wrapper {
        width: 90%;
        height: 70%;
        .surgery_type {
            font-size: 15px;
        }
        .title {
            margin-top: 10px;
            color: #63c3c4;
            font-size: 14px;
        }
        .content {
            margin-top: 10px;
            font-size: 12px;
        }
    }
    @media screen and (max-width: 750px) {
        font-family: NanumSquare_acB;
        .col3_wrapper {
            .surgery_type {
                font-size: 17px;
            }
            .title {
                margin-top: 3px;
                font-size: 17px;
            }
            .content {
                margin-top: 3px;
                font-size: 10px;
            }
        }
    }
    @media screen and (max-width: 400px){
        .col3_wrapper{
            .surgery_type{
                font-size: 4vw;
            }
            .title{
                font-size: 3.5vw;
            }
            .content{
                font-size: 3vw;
                line-height: 3.5vw;
            }
        }
    }
    @media screen and (max-width: 500px){
        .col3_wrapper{
            .surgery_type{
                font-size: 3.5vw;
            }
            .title{
                font-size: 3vw;
            }
            .content{
                font-size: 2.5vw;
                line-height: 3vw;
            }
        }
    }
`
function ReviewBlock({ e, idx, allList }) {
    const onDelete = () => {
        console.log(e)
        console.log(1)
        const db = firebase.firestore()
        db.collection('sightcorrection_comment').doc(e.id).delete()
    }
    const description_link = '/sight-correction-review/description/' + e.id
    const { userInfo } = useContext(UserContext)
    // if(e.content.length)
    return (
        <ReviewBlockWrapper
            to={{
                pathname: description_link,
                state: { e: e, idx: idx, allList: allList },
            }}
        >
            <ReviewBlockContainer>
                <ReviewBlock_col1_wrapper>
                    <ReviewBlock_col1>
                        <div className="box1">
                            <img src="/review/review_guy.png"></img>
                        </div>
                        <div className="box2">
                            <span>
                                {e.name}
                                <br />
                            </span>
                            <span className="blank">
                                <br />
                            </span>
                            <span className="tags">연령</span>
                            <span>&nbsp;</span>
                            <span className="tags">{e.age}</span>
                            <span className="tags_sex">성별&nbsp;</span>
                            <span className="tags">{e.sex}</span>
                        </div>
                        <div className="box3">
                            <SightScore>
                                <div className="title">
                                    <span>수술 후 시력</span>
                                </div>
                                <div className="left">
                                    <span>좌안</span>
                                </div>
                                <div className="leftscore">{e.leftsight}</div>
                                <div className="right">우안</div>
                                <div className="rightscore">{e.rightsight}</div>
                            </SightScore>
                        </div>
                    </ReviewBlock_col1>
                </ReviewBlock_col1_wrapper>
                <Media queries={{ small: { maxWidth: 750 } }}>
                    {(matches) =>
                        matches.small ? (
                            <Fragment />
                        ) : (
                            <ReviewBlock_col2>
                                <img src="review/gold_medal.png" />
                            </ReviewBlock_col2>
                        )
                    }
                </Media>
                {/* <p style={{color:'#63c3c4',font:'NanumSquare_acEB'}}>목표달성</p> */}
                <ReviewBlock_col3>
                    <div className="col3_wrapper">
                        <div className="surgery_type">
                            <span>수술명:&nbsp;</span>
                            <span>{e.surgeryType}</span>
                        </div>
                        <div className="title">{e.title}</div>
                        <div className="content">
                            {e.content.length > 50
                                ? e.content.slice(0, 50) + ' ...'
                                : e.content}
                        </div>
                    </div>
                </ReviewBlock_col3>
            </ReviewBlockContainer>
            {/* <div>{userInfo.authority}
        </div> */}
            {userInfo.authority === 'admin' ? (
                <DeleteForeverOutlinedIcon
                    style={{ color: '#707070' }}
                    onClick={() => {
                        onDelete()
                    }}
                />
            ) : (
                // <button onclick={onDelete()}>삭제</button>
                <Fragment />
            )}
        </ReviewBlockWrapper>
    )
}

export default ReviewBlock
