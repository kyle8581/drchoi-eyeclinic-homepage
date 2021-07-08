import styled from 'styled-components/macro'
import React, {useContext} from 'react'
import firebase from 'firebase/app'
import {UserContext} from "../UserContext"
import {Link} from "react-router-dom"
const ReviewBlockWrapper = styled(Link)`
width: 1100px;
display: flex;
flex-direction: row;
text-decoration: none;

/* justify-content: center; */
align-items: center;
`
const ReviewBlockContainer = styled.div`
    width: 1000px;
    height: 180px;
    text-decoration: none;
    display:grid;
    grid-template-columns: 3fr 1fr 5fr;
`
const ReviewBlock_col1_wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-right: 2px solid #707070;
`
const ReviewBlock_col1 = styled.div`
    width:90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.1fr 1fr;
    font-family:NanumSquare_acEB;
    color:#707070;
    .box1{
        grid-column-start: 1;
        grid-column-end:2;
        grid-row-start:1;
        grid-row-end:2;
        background-color: yellow;
    }
    .box2{
        grid-column-start: 2;
        grid-column-end:4;
        grid-row-start:1;
        grid-row-end:2;
        padding-left: 0.8rem;
    }
    .box3{
        grid-column-start: 1;
        grid-column-end:4;
        grid-row-start:3;
        grid-row-end:4;
    }
    
`
const SightScore = styled.div`
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 2fr 2.5fr;
        /* justify-content:center;
        align-items:center; */
        border-bottom: 2px solid #acacac;
        border-top: 2px solid #acacac;
        text-align:center;
        .title{
            grid-column-start: 1;
            grid-column-end:5;
            grid-row-start:1;
            grid-row-end:2;
            background-color: #ededed;
            border-bottom: 2px solid #acacac;
            top:50%;
            height:1.6rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .left{
            grid-column-start: 1;
            grid-column-end:2;
            grid-row-start:2;
            grid-row-end:3;
            background-color: #ededed;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .leftscore{
            grid-column-start: 2;
        grid-column-end:3;
        grid-row-start:2;
        grid-row-end:3;
        display:flex;
            align-items:center;
            justify-content:center;
        }
        .right{
            grid-column-start: 3;
            grid-column-end:4;
            grid-row-start:2;
            grid-row-end:3;
            background-color: #ededed;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .rightscore{
            grid-column-start: 4;
            grid-column-end:5;
            grid-row-start:2;
            grid-row-end:3;
            display:flex;
            align-items:center;
            justify-content:center;
        }
`
const ReviewBlock_col2=styled.div`
border-right:2px solid #707070;
display:flex;
justify-content:center;
align-items:center;
    img{
        width:80%;
}
`
const ReviewBlock_col3 = styled.div`
    font-family:NanumSquare_acEB;
    color:#707070;
    display: flex;
    justify-content:center;
    align-items:center;
    .col3_wrapper{
        width:90%;
        height:70%;
        .surgery_type{
            font-size:15px;
        }
        .title{
            margin-top:10px;
            color:#63c3c4;
            font-size:14px;
        }
        .content{
            margin-top:10px;
            font-size:12px;
        }
    }
`

function ReviewBlock({e, idx, allList}){
    const onDelete=()=>{
        console.log(e)
        const db=firebase.firestore()
        db.collection("sightcorrection_comment").doc(e.id).delete()
    }
    const description_link = "/sight-correction-review/description/"+e.id
    const {userInfo} = useContext(UserContext)
    // if(e.content.length)
    return(
        <ReviewBlockWrapper  to={{ pathname: description_link, state: { e: e, idx:idx, allList:allList} }}>
    
        <ReviewBlockContainer>
            <ReviewBlock_col1_wrapper>
            <ReviewBlock_col1>
                <div className="box1"></div>
                <div className="box2">
                    <span>{e.name}<br /></span>
                    <span><br /></span>
                    <span style={{
                        "fontFamily":"NanumSquare_acEB","fontSize":"0.8rem"
                    }}>연령</span>
                    <span>&nbsp;</span>
                    <span style={{"fontFamily":"NanumSquare_acB", "fontSize":"0.8rem"}}>{e.age}</span>
                    <span style={{
                        "marginLeft":"1rem",
                        "fontFamily":"NanumSquare_acEB","fontSize":"0.8rem"
                    }}>성별&nbsp;</span>
                    <span style={{"fontFamily":"NanumSquare_acB","fontSize":"0.8rem"}}>{e.sex}</span>
                </div>
                <div className="box3">
                    <SightScore>
                        <div className="title">
                            <span>수술 후 시력</span>
                        </div>
                        <div className="left">
                            <span>좌안</span>
                            </div>
                        <div className="leftscore" style={{"fontFamily":"NanumSquare_acEB","fontSize":"1.5rem"}}>{e.sightAfter}</div>
                        <div className="right">우안</div>
                        <div className="rightscore"  style={{"fontFamily":"NanumSquare_acEB","fontSize":"1.5rem"}}>{e.sightAfter}</div>
                    </SightScore>
                </div>
            </ReviewBlock_col1>
            </ReviewBlock_col1_wrapper>
            <ReviewBlock_col2>
                <img src="review/gold_medal.png"/>
            </ReviewBlock_col2>
            {/* <p style={{color:'#63c3c4',font:'NanumSquare_acEB'}}>목표달성</p> */}
            <ReviewBlock_col3>
                <div className="col3_wrapper">
                <div className="surgery_type">
                        <span>수술명&nbsp;</span>
                        <span>{e.surgeryType}</span>
                </div>
                <div className="title">{e.title}</div>
                <div className="content">{e.content.length>50 ? (e.content.slice(0,50)+ " ..." ): e.content}</div>
             
                </div>
            </ReviewBlock_col3>
             
        </ReviewBlockContainer>
        {/* <div>{userInfo.authority}
        </div> */}
        {userInfo.authority==="admin"? <button style={{height:"20px"}} onClick={onDelete}>삭제</button>:<></>}
       
        </ReviewBlockWrapper>
    )
}

export default ReviewBlock