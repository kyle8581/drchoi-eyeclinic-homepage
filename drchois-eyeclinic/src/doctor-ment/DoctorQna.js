import React from 'react'
import DoctorComments from './DoctorCommentText.json'
import {
    Border,
    Wrapper,
    Grid,
    TitleContainer,
    QnaBackGroundText,
    QnaGreenBox,
    QnaContentContianer,
    DoctorIdentity,
    DoctorCircleImg,
    DoctorName,
    Comment,
} from './DoctorQna.components'
function DoctorQna() {
    const CommentText = DoctorComments
    // console.log(CommentText[0].text)
    return (
        <Border>
            <Wrapper>
                <QnaBackGroundText>Trust in</QnaBackGroundText>
                <Grid>
                    <TitleContainer>
                        <QnaGreenBox />
                        의사를 치료하는 최승일 원장님
                    </TitleContainer>
                    <QnaContentContianer className="kim">
                        <DoctorIdentity>
                            <DoctorCircleImg src="qna/qnadoctors4.png" />
                            <DoctorName>산부인과 김옥화 원장님</DoctorName>
                        </DoctorIdentity>
                        <Comment>
                            <div>{CommentText[2].text.toString()}</div>
                        </Comment>
                    </QnaContentContianer>
                    <QnaContentContianer className="park">
                        <DoctorIdentity>
                            <DoctorCircleImg src="qna/qnadoctors1.png" />
                            <DoctorName>소아과 박상호 원장님</DoctorName>
                        </DoctorIdentity>
                        <Comment>
                            <div>{CommentText[0].text.toString()}</div>
                        </Comment>
                    </QnaContentContianer>
                    <QnaContentContianer className="jung">
                        <DoctorIdentity>
                            <DoctorCircleImg src="qna/qnadoctors5.png" />
                            <DoctorName>이비인후과 정인호 원장님</DoctorName>
                        </DoctorIdentity>
                        <Comment>
                            <div>{CommentText[3].text.toString()}</div>
                        </Comment>
                    </QnaContentContianer>
                    <QnaContentContianer className="choi">
                        <DoctorIdentity>
                            <DoctorCircleImg src="qna/qnadoctors2.png" />
                            <DoctorName>치과 최진휴 원장님</DoctorName>
                        </DoctorIdentity>
                        <Comment>
                            <div>{CommentText[1].text.toString()}</div>
                        </Comment>
                    </QnaContentContianer>
                    <QnaContentContianer className="cho">
                        <DoctorIdentity>
                            <DoctorCircleImg src="qna/qnadoctors3.png" />
                            <DoctorName>내과 조연희 원장님</DoctorName>
                        </DoctorIdentity>
                        <Comment>
                            <div>{CommentText[4].text}</div>
                        </Comment>
                    </QnaContentContianer>
                </Grid>
            </Wrapper>
        </Border>
    )
}

export default DoctorQna
