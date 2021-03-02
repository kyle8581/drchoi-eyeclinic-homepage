import React from 'react'
// import { Element } from 'react-scroll'
import * as GiIcons from 'react-icons/gi'
import * as AiIcons from 'react-icons/ai'
import GreenCircleWithNumber from '../../icon_components/GreenCircleWithNumber'
import GreenCircleWithCheck from '../../icon_components/GreenCircleWithCheck'
import {
    LasekContainer,
    FirstImage,
    SecondBox,
    SecondFirstRow,
    SecondFirstRow_image1,
    SecondFirstRow_box2,
    Box2Title,
    Box2Ul,
    Box2li,
    SecondFirstRow_image3,
    SecondSecondRow,
    SecondSecondTitle,
    SecondSecondImgBox,
    ImgElement,
    SecondSecondImg,
    SecondSecondImgTagBox,
    NumberCircle,
    ImgTag,
    ThirdImage,
    FourthBox,
    FourthElement,
    FourthTitle1,
    FourthTitle1_Black,
    FourthTitle1_Orange,
    FourthTitle2,
    FourthInformation,
    FourthText,
    FifthBox,
    FifthContainer,
    FifthTitle,
    FifthContentBox,
    DateBox,
    Date,
    SurgeryBox,
    SurgeryTitle,
    SurgeryDateImg,
    CheckCircle,
    FirstBox,
    FirstTextContainer,
} from './Lasek.components'
function Lasek() {
    const InformationContent = [
        {
            title: '컴포트 무통라섹 수술의 장점',
            information: [
                '라식에 비해 잔여각막두께를 더 남길 수 있어 저도수부터 고도근시 교정까지 수술 가능 ',
                '수술 후 충분한 안정기간이 경과하면 외부 충격으로부터 안전함',
                '각막 크기와 모양에 관계없이 수술이 가능',
                '빛번짐, 눈부심의 우려가 적음',
            ],
        },
        {
            title: '무통라섹 추천대상',
            information: [
                '각막이 너무 얇은 경우',
                '근시가 심한 경우',
                '눈이 너무 작아 각막 절편을 만들기 어려운 경우',
                '안구건조증과 빛번짐에 민감하신 경우',
                '눈에 충격을 받을 수 있는 직업이나 스포츠를 즐기시는 경우',
            ],
        },
    ]
    const Dates = ['수술 다음날', '2~3일 후', '일주일 후', '한 달 후']
    const Surgeries = [
        { title: '스마일', image: 'lasek/lasek_aftersmile.png' },
        { title: '라식', image: 'lasek/lasek_afterlasik.png' },
        { title: '라섹', image: 'lasek/lasek_afterlasek.png' },
    ]
    return (
        <LasekContainer name="lasek">
            <FirstBox>
                <FirstTextContainer>
                    <h1>컴포트 무통라섹</h1>
                    <h5>Comfort Lasek</h5>
                    <h4>
                        가장 앞쪽에 있는 상피만을 벗긴 후 각막실질을 노출시켜
                        레이저를 조사한 후 굴절이상을 교정하는 수술입니다.
                    </h4>
                    <h3>
                        수술 후 더딘 회복속도와 안구건조증의 문제점을 최소화하고
                        1만 증례 이상의 풍부한 시력교정수술 경험을 토대로 통증을
                        감소했습니다.
                    </h3>
                </FirstTextContainer>
                <FirstImage src="lasek/lasek_firstimage.png" />
            </FirstBox>
            <SecondBox>
                <SecondFirstRow>
                    <SecondFirstRow_image1 src="lasek/lasek_secondimage1.png" />
                    <SecondFirstRow_box2>
                        <Box2Title>컴포트 무통라섹</Box2Title>
                        <Box2Ul>
                            <Box2li>
                                ▶ 각막상피만 벗겨 레이저를 쏘아 시력교정 후 렌즈
                                착용
                            </Box2li>
                            <Box2li>▶ 각막이 얇아도 수술 가능</Box2li>
                        </Box2Ul>
                    </SecondFirstRow_box2>
                    <SecondFirstRow_image3 src="lasek/lasek_secondimage3.png" />
                </SecondFirstRow>
                <SecondSecondRow>
                    <SecondSecondTitle>수술과정</SecondSecondTitle>
                    <SecondSecondImgBox>
                        <ImgElement>
                            <SecondSecondImg src="lasek/lasek_processimage1.png" />
                            <SecondSecondImgTagBox>
                                <div>
                                    <GreenCircleWithNumber
                                        className="green_circle_with_number"
                                        number={1}
                                    />
                                </div>
                                <ImgTag>
                                    특수약품을 넣어 불린 후 각막 상피층을 벗겨냄
                                </ImgTag>
                            </SecondSecondImgTagBox>
                        </ImgElement>
                        <ImgElement>
                            <SecondSecondImg src="lasek/lasek_processimage2.png" />
                            <SecondSecondImgTagBox>
                                <div>
                                    <GreenCircleWithNumber
                                        className="green_circle_with_number"
                                        number={2}
                                    />
                                </div>
                                <ImgTag>레이저를 이용하여 시력교정</ImgTag>
                            </SecondSecondImgTagBox>
                        </ImgElement>
                        <ImgElement>
                            <SecondSecondImg src="lasek/lasek_processimage3.png" />
                            <SecondSecondImgTagBox>
                                <div>
                                    <GreenCircleWithNumber
                                        className="green_circle_with_number"
                                        number={3}
                                    />
                                </div>
                                <ImgTag>
                                    각막 상피층을 다시 덮고 치료용 콘택트렌즈
                                    착용
                                </ImgTag>
                            </SecondSecondImgTagBox>
                        </ImgElement>
                    </SecondSecondImgBox>
                </SecondSecondRow>
            </SecondBox>
            <ThirdImage src="lasek/lasek_thirdimage.png" />
            <FourthBox>
                {InformationContent.map((el, index) => (
                    <FourthElement>
                        {index === 0 ? (
                            <FourthTitle1>
                                <FourthTitle1_Black>
                                    컴포트 무통라섹
                                </FourthTitle1_Black>
                                <FourthTitle1_Orange>
                                    수술의 장점
                                </FourthTitle1_Orange>
                            </FourthTitle1>
                        ) : (
                            <FourthTitle2>{el.title}</FourthTitle2>
                        )}
                        {el.information.map((list) => (
                            <FourthInformation>
                                <GreenCircleWithCheck className="green_circle_with_check" />
                                <FourthText>{list}</FourthText>
                            </FourthInformation>
                        ))}
                    </FourthElement>
                ))}
            </FourthBox>
            <FifthBox>
                <FifthContainer>
                    <FifthTitle>수술 후 비교</FifthTitle>
                    <FifthContentBox>
                        <DateBox>
                            {Dates.map((el) => (
                                <Date>{el}</Date>
                            ))}
                        </DateBox>
                        {Surgeries.map((el) => (
                            <SurgeryBox>
                                <SurgeryTitle>{el.title}</SurgeryTitle>
                                <SurgeryDateImg src={el.image} />
                            </SurgeryBox>
                        ))}
                    </FifthContentBox>
                </FifthContainer>
            </FifthBox>
        </LasekContainer>
    )
}
export default Lasek
