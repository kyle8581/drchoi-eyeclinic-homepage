import React from 'react'
import GreenCircleWithNumber from '../icon_components/GreenCircleWithNumber'
import {
    NoanContainer,
    IntroductionBox,
    Title,
    Summary,
    IntroductionImgBox,
    Sec2,
    Sec3,
    Sec5,
    Sec6,
    Sec7,
} from './noan.components'
import Media from 'react-media'
function NoanMobile() {
    return (
        <NoanContainer>
            <IntroductionBox>
                <Title>
                    <p>백내장</p>
                </Title>
                <Summary>
                    <p>빛은 각막을 통해 수정체를 통과하여 망막에 맺힙니다.</p>
                    <p>
                        투명했던 수정체가 노화에 의하여 혼탁해지면서
                    </p>
                    <p>
                        시력의 질이 떨어지는 질환으로,우리나라 국민들이 가장 많이
                    </p>
                    <p>
                        받는 수술 1위가 백내장 수술이며 백내장 검사는 40대
                    </p>
                    <p>이후 필수적으로 권장하는 안과검진이
                        되었습니다.</p>
                </Summary>
                <IntroductionImgBox src="presbyopia/sec1Mobile.png" />
            </IntroductionBox>
            <Sec2 src="presbyopia/sec2Mobile.png" />
            <Sec3 src="presbyopia/sec3Mobile.png" />
            <Sec5 src="presbyopia/sec5Mobile.png" />
            <Sec6 src="presbyopia/sec6Mobile.png" />
            <Sec7 src="presbyopia/sec7Mobile.png" />
        </NoanContainer>
    )
}
function NoanTablet() {
    return (
        <NoanContainer>
            <IntroductionBox>
                <Title>
                    <p>백내장</p>
                </Title>
                <Summary>
                    <p>빛은 각막을 통해 수정체를 통과하여 망막에 맺힙니다.</p>
                    <p>
                        투명했던 수정체가 노화에 의하여 혼탁해지면서 시력의 질이
                        떨어지는 질환으로,
                    </p>
                    <p>
                        우리나라 국민들이 가장 많이 받는 수술 1위가 백내장
                        수술이며 백내장 검사는 
                    </p>
                    <p>
                        40대 이후 필수적으로 권장하는 안과검진이
                        되었습니다.
                    </p>
                </Summary>
                <IntroductionImgBox src="presbyopia/sec1Tablet.png" />
            </IntroductionBox>
            <Sec2 src="presbyopia/sec2.png" />
            <Sec3 src="presbyopia/sec3.png" />
            <Sec5 src="presbyopia/sec5.png" />
            <Sec6 src="presbyopia/sec6Tablet.png" />
            <Sec7 src="presbyopia/sec7Tablet.png" />
        </NoanContainer>
    )
}
function NoanDesktop() {
    return (
        <NoanContainer>
            <IntroductionBox>
                {/* <GreenBox /> */}
                <Title>
                    <p>백내장</p>
                </Title>
                <Summary>
                    <p>빛은 각막을 통해 수정체를 통과하여 망막에 맺힙니다.</p>
                    <p>
                        투명했던 수정체가 노화에 의하여 혼탁해지면서 시력의 질이
                        떨어지는 질환으로,
                    </p>
                    <p>
                        우리나라 국민들이 가장 많이 받는 수술 1위가 백내장
                        수술이며
                    </p>
                    <p>
                        백내장 검사는 40대 이후 필수적으로 권장하는 안과검진이
                        되었습니다.
                    </p>
                </Summary>
                <IntroductionImgBox src="presbyopia/sec1.png" />
            </IntroductionBox>
            <Sec2 src="presbyopia/sec2.png" />
            <Sec3 src="presbyopia/sec3.png" />
            <Sec5 src="presbyopia/sec5.png" />
            <Sec6 src="presbyopia/sec6.png" />
            <Sec7 src="presbyopia/sec7.png" />
        </NoanContainer>
    )
}
function Noan() {
    return (
        <Media queries={{ mobile: { maxWidth: 500 } }}>
            {(matches) =>
                matches.mobile ? (
                    <NoanMobile />
                ) : (
                    <Media queries={{ tablet: { maxWidth: 1000 } }}>
                        {(matches) =>
                            matches.tablet ? <NoanTablet /> : <NoanDesktop />
                        }
                    </Media>
                )
            }
        </Media>
    )
}
export default Noan


            {/* <SurgeryProcess>
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
                <ClosingImg src="noan/closingimg.png" /> */}