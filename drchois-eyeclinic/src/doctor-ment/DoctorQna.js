import React, { useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

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
    const [open, setOpen] = useState(false)
    const [qnaIndex, setQnaIndex] = useState(0)
    const nameLookup = [
        '소아과 박상호 원장님',
        '치과 최진휴 원장님',
        '산부인과 김옥화 원장님',
        '이비인후과 정인호 원장님',
        '내과 조연희 원장님',
    ]
    const imageLookup = { 2: 4, 0: 1, 3: 5, 1: 2, 4: 3 }
    return (
        <Border>
            <Wrapper>
                <QnaBackGroundText>TRUST IN</QnaBackGroundText>
                <Grid>
                    <TitleContainer>
                        의사를 치료하는 최승일 원장님
                    </TitleContainer>
                    <QnaContentContianer
                        className="kim"
                        onClick={() => {
                            setQnaIndex(2)
                            setOpen(true)
                        }}
                    >
                        <DoctorIdentity>
                            <DoctorCircleImg
                                src="qna/qnadoctors4.webp"
                                alt="doctor"
                            />
                            <DoctorName>산부인과 김옥화 원장님</DoctorName>
                        </DoctorIdentity>
                        <Comment>
                            <div>
                                {CommentText[2].text.toString().slice(0, 100) +
                                    ' ...더보기'}
                            </div>
                        </Comment>
                    </QnaContentContianer>

                    <QnaContentContianer
                        className="park"
                        onClick={() => {
                            setQnaIndex(0)
                            setOpen(true)
                        }}
                    >
                        <DoctorIdentity>
                            <DoctorCircleImg
                                src="qna/qnadoctors1.webp"
                                alt="doctor"
                            />
                            <DoctorName>소아과 박상호 원장님</DoctorName>
                        </DoctorIdentity>
                        <Comment>
                            <div>
                                {CommentText[0].text.toString().slice(0, 100) +
                                    ' ...더보기'}
                            </div>
                        </Comment>
                    </QnaContentContianer>
                    <QnaContentContianer
                        className="jung"
                        onClick={() => {
                            setQnaIndex(3)
                            setOpen(true)
                        }}
                    >
                        <DoctorIdentity>
                            <DoctorCircleImg
                                src="qna/qnadoctors5.webp"
                                alt="doctor"
                            />
                            <DoctorName>이비인후과 정인호 원장님</DoctorName>
                        </DoctorIdentity>
                        <Comment>
                            <div>
                                {CommentText[3].text.toString().slice(0, 100) +
                                    ' ...더보기'}
                            </div>
                        </Comment>
                    </QnaContentContianer>
                    <QnaContentContianer
                        className="choi"
                        onClick={() => {
                            setQnaIndex(1)
                            setOpen(true)
                        }}
                    >
                        <DoctorIdentity>
                            <DoctorCircleImg
                                src="qna/qnadoctors2.webp"
                                alt="doctor"
                            />
                            <DoctorName>치과 최진휴 원장님</DoctorName>
                        </DoctorIdentity>
                        <Comment>
                            <div>
                                {CommentText[1].text.toString().slice(0, 100) +
                                    ' ...더보기'}
                            </div>
                        </Comment>
                    </QnaContentContianer>
                    <QnaContentContianer
                        className="cho"
                        onClick={() => {
                            setQnaIndex(4)
                            setOpen(true)
                        }}
                    >
                        <DoctorIdentity>
                            <DoctorCircleImg
                                src="qna/qnadoctors3.webp"
                                alt="doctor"
                            />
                            <DoctorName>내과 조연희 원장님</DoctorName>
                        </DoctorIdentity>
                        <Comment>
                            <div>
                                {CommentText[4].text.slice(0, 100) +
                                    ' ...더보기'}
                            </div>
                        </Comment>
                    </QnaContentContianer>
                </Grid>
            </Wrapper>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
            >
                <Modal.Header>Comment</Modal.Header>
                <Modal.Content image scrolling>
                    <Image
                        size="large"
                        src={'/qna/qnadoctors' + imageLookup[qnaIndex] + '.webp'}
                        wrapped
                    />
                    <Modal.Description>
                        <Header>{nameLookup[qnaIndex]}</Header>
                        <p>{CommentText[qnaIndex].text.toString()}</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="teal" onClick={() => setOpen(false)}>
                        닫기
                    </Button>
                </Modal.Actions>
            </Modal>
        </Border>
    )
}

export default DoctorQna
