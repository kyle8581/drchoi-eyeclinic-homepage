import React from 'react'
import GreenCircleWithNumber from '../icon_components/GreenCircleWithNumber'
import {
    View,
    NoanContainer,
    IntroductionBox,
    GreenBox,
    Title,
    Summary,
    IntroductionImgBox,
    ImgBox,
    SurgeryProcess,
    Title2,
    SurgeryImgBox,
    SurgeryImg,
    TagBox,
    ImgTag2,
    ClosingImg,
} from './noan.components'

function Noan() {
    return (
        <View>
            <NoanContainer>
                <IntroductionBox>
                    <GreenBox />
                    <Title>백내장</Title>
                    <Summary>
                        <p>
                            빛은 각막을 통해 수정체를 통과하여 망막에 맺힙니다.
                        </p>
                        <p>
                            투명했던 수정체가 노화에 의하여 혼탁해지면서 시력의
                            질이 떨어지는 질환으로,
                        </p>
                        <p>
                            우리나라 국민들이 가장 많이 받는 수술 1위가 백내장
                            수술이며
                        </p>
                        <p>
                            백내장 검사는 40대 이후 필수적으로 권장하는
                            안과검진이 되었습니다.
                        </p>
                    </Summary>
                    <IntroductionImgBox src="noan/introductionimage.png" />
                </IntroductionBox>
                <SurgeryProcess>
                    <Title2>수술과정</Title2>
                    <SurgeryImgBox>
                        <ImgBox className="1">
                            <SurgeryImg src="noan/process1.png" />
                            <TagBox>
                                <div>
                                    <GreenCircleWithNumber
                                        className="green_circle_with_number"
                                        number={1}
                                    />
                                </div>
                                <ImgTag2>
                                    혼탁해진 수정체, 마취안약 점안 후 미세절개
                                </ImgTag2>
                            </TagBox>
                        </ImgBox>
                        <ImgBox className="2">
                            <SurgeryImg src="noan/process2.png" />
                            <TagBox>
                                <div>
                                    <GreenCircleWithNumber
                                        className="green_circle_with_number"
                                        number={2}
                                    />
                                </div>
                                <ImgTag2>
                                    미세한 절개창을 통해 혼탁해진 수정체 제거
                                </ImgTag2>
                            </TagBox>
                        </ImgBox>
                        <ImgBox className="3">
                            <SurgeryImg src="noan/process3.png" />
                            <TagBox>
                                <div>
                                    <GreenCircleWithNumber
                                        className="green_circle_with_number"
                                        number={3}
                                    />
                                </div>
                                <ImgTag2>
                                    제거한 수정체 자리에 인공수정체를 삽입
                                </ImgTag2>
                            </TagBox>
                        </ImgBox>
                        <ImgBox className="4">
                            <SurgeryImg src="noan/process4.png" />
                            <TagBox>
                                <div>
                                    <GreenCircleWithNumber
                                        className="green_circle_with_number"
                                        number={4}
                                    />
                                </div>
                                <ImgTag2>
                                    인공수정체의 정확한 위치를 잡고 수술완료
                                </ImgTag2>
                            </TagBox>
                        </ImgBox>
                    </SurgeryImgBox>
                </SurgeryProcess>
                <ClosingImg src="noan/closingimg.png" />
            </NoanContainer>
        </View>
    )
}
export default Noan
