import React from 'react'
import GreenCircleWithNumber from '../../icon_components/GreenCircleWithNumber'
import GreenCircleWithCheck from '../../icon_components/GreenCircleWithCheck'
import {
    LasikContainer,
    LasikWrapper,
    Lasik_sec1,
    Lasik_sec1_content,
    Lasik_sec2,
    Lasik_sec2_row1,
    Lasik_sec2_row1_col1,
    Lasik_sec2_row1_col2,
    Lasik_sec2_row1_col2_Ul,
    Lasik_sec2_row1_col2_li,
    Lasik_sec2_row1_col2_title,
    Lasik_sec2_row1_col3,
    Lasik_sec2_row2,
    Lasik_sec2_row2_title,
    Lasik_sec2_row2_content,
    Lasik_sec2_row2_img,
    Lasik_sec2_row3,
    Lasik_sec2_row3_imgBox,
    Lasik_sec2_row3_imgEle,
    Lasik_sec2_row3_img,
    Lasik_sec2_row3_imgTagBox,
    Lasik_sec2_row3_imgTag,
    Lasik_sec2_row4,
    Lasik_sec2_row4_contextWrapper,
    Lasik_sec2_row4_context,
    Lasik_sec3,
    Circle,
    Lasik_sec3_circleContainer,
    Lasik_sec3_textContainer,
    Lasik_sec4,
    Lasik_sec4_container,
    Lasik_sec4_ele,
    Lasik_sec4_title,
} from './Lasik.components'
function Lasik() {
    const sec4_content = [
        {
            title: '원데이 비쥬라식 수술의 장점',
            information: [
                '수술 다음날부터 통증이 거의 없고 회복이 빨라서 거의 모든 일상생활이 가능',
                '정교한 레이저 사용으로 각막절편이 견고함',
                '각막혼탁, 근시 재발의 가능성이 매우 적음',
                '재수술이나 추가교정이 필요한 경우 수술이 용이함',
            ],
        },
        {
            title: '비쥬라식 추천대상',
            information: [
                '근시가 심하지 않은 경우',
                '빠른 회복을 원하는 경우',
                '난시교정이 필요한 경우',
                '각막 두께가 충분한 경우',
                '통증 없는 수술을 원하는 경우',
            ],
        },
    ]
    const sec3_content = [
        {
            title: '안정성',
            information: ['3D방식의', '맞춤형 각막 형성'],
        },
        {
            title: '신속함',
            information: ['빠른 속도,', '안전한 수술'],
        },
        {
            title: '정교함',
            information: ['섬세한 레이저,', '정교한 수술'],
        },
        {
            title: '합병증 최소화',
            information: ['저자극 에너지로', '부작용 최소화'],
        },
    ]
    return (
        <LasikContainer name="lasik">
            <LasikWrapper>
                <Lasik_sec1>
                    <Lasik_sec1_content>
                        <h1>원데이 비쥬라식</h1>
                        <h5>
                            <span>One Day </span>
                            Visu Lasik
                        </h5>
                        <h3>
                            <div>
                                정교한 레이저를 이용하여 각막절편을 만들고,
                            </div>
                            <div>
                                각막절편을 열어 각막의 실질부위에 레이저를
                            </div>
                            <div>조사하여 굴절이상을 교정하는 수술입니다.</div>
                        </h3>
                        <h4>압구정최안과는 펨토세컨레이저를</h4>
                        <h4>이용하여 빠르고 정확한 수술이</h4>
                        <h4>가능합니다.</h4>
                    </Lasik_sec1_content>
                </Lasik_sec1>
                <Lasik_sec2>
                    <Lasik_sec2_row1>
                        <Lasik_sec2_row1_col1 src="surgery/Lasik/lasik_sec2_img1.png" />
                        <Lasik_sec2_row1_col2>
                            <Lasik_sec2_row1_col2_title>
                                3세대 시력교정술 펨토세컨 레이저 라식
                            </Lasik_sec2_row1_col2_title>
                            <Lasik_sec2_row1_col2_Ul>
                                <Lasik_sec2_row1_col2_li>
                                    ▶ 펨토세컨 레이저를 이용한 각막 절편 생성
                                </Lasik_sec2_row1_col2_li>
                                <Lasik_sec2_row1_col2_li>
                                    ▶ 빠른 시력 회복
                                </Lasik_sec2_row1_col2_li>
                                <Lasik_sec2_row1_col2_li>
                                    ▶ 각막절편이 견고함
                                </Lasik_sec2_row1_col2_li>
                            </Lasik_sec2_row1_col2_Ul>
                        </Lasik_sec2_row1_col2>
                        <Lasik_sec2_row1_col3 src="surgery/Lasik/lasik_sec2_img2.png" />
                    </Lasik_sec2_row1>
                    <Lasik_sec2_row2>
                        <Lasik_sec2_row2_title>
                            기존 라식보다
                            <span> 정교하고 안전한 원데이 비쥬라식</span>
                        </Lasik_sec2_row2_title>
                        <Lasik_sec2_row2_content>
                            기존 일반 라식보다 원데이 비쥬라식으로 수술할 경우
                            각막을 정교하게 절단하여
                            <span>
                                {' '}
                                각막 손상과 부작용을 최소화하여 통증이 적고
                                회복이 빠릅니다.
                            </span>
                        </Lasik_sec2_row2_content>
                        <Lasik_sec2_row2_img src="surgery/Lasik/lasik_sec2_img3.png" />
                    </Lasik_sec2_row2>
                    <Lasik_sec2_row3>
                        <h1>수술과정</h1>
                        <Lasik_sec2_row3_imgBox>
                            <Lasik_sec2_row3_imgEle>
                                <Lasik_sec2_row3_img src="surgery/Lasik/lasik_sec2_img4.png" />
                                <Lasik_sec2_row3_imgTagBox>
                                    <div>
                                        <GreenCircleWithNumber
                                            className="green_circle_with_number"
                                            number={1}
                                        />
                                    </div>
                                    <Lasik_sec2_row3_imgTag>
                                        초고속 레이저를 쏘아 각막절편 만들어
                                        올려 젖힘
                                    </Lasik_sec2_row3_imgTag>
                                </Lasik_sec2_row3_imgTagBox>
                            </Lasik_sec2_row3_imgEle>
                            <Lasik_sec2_row3_imgEle>
                                <Lasik_sec2_row3_img src="surgery/Lasik/lasik_sec2_img5.png" />
                                <Lasik_sec2_row3_imgTagBox>
                                    <div>
                                        <GreenCircleWithNumber
                                            className="green_circle_with_number"
                                            number={2}
                                        />
                                    </div>
                                    <Lasik_sec2_row3_imgTag>
                                        각막절편을 열고 레이저 쏘아 시력교정
                                        진행
                                    </Lasik_sec2_row3_imgTag>
                                </Lasik_sec2_row3_imgTagBox>
                            </Lasik_sec2_row3_imgEle>
                            <Lasik_sec2_row3_imgEle>
                                <Lasik_sec2_row3_img src="surgery/Lasik/lasik_sec2_img6.png" />
                                <Lasik_sec2_row3_imgTagBox>
                                    <div>
                                        <GreenCircleWithNumber
                                            className="green_circle_with_number"
                                            number={3}
                                        />
                                    </div>
                                    <Lasik_sec2_row3_imgTag>
                                        각막절편 원위치로 다시 덮음
                                    </Lasik_sec2_row3_imgTag>
                                </Lasik_sec2_row3_imgTagBox>
                            </Lasik_sec2_row3_imgEle>
                        </Lasik_sec2_row3_imgBox>
                    </Lasik_sec2_row3>
                    <Lasik_sec2_row4>
                        <p>첨단 장비 펨토세컨 레이저 비쥬맥스</p>
                        <Lasik_sec2_row4_contextWrapper>
                            <Lasik_sec2_row4_context>
                                <h2>펨토세컨 레이저 시스템</h2>
                                초고속 레이저 빔으로
                                <span> 촘촘한 각막절편 제작</span>
                                가능
                                <span>
                                    <br />
                                </span>
                                <span>각막절편 두께 조절이 가능</span>
                                하여 맞춤형 수술 가능
                                <span>
                                    <br />
                                </span>
                                각막고정(검은자위)으로 출혈 발생 적음
                                <span>
                                    <br />
                                </span>
                                눈물 생성에 필요한 결막술진세포의 손상이 없어
                                <span>
                                    <br />
                                    수술 후 건조증을 줄임
                                </span>
                            </Lasik_sec2_row4_context>
                            <Lasik_sec2_row4_context>
                                <h2>
                                    곡면의 각막 접촉렌즈 사용으로 압력이 없음
                                </h2>
                                곡면 형태의 렌즈 모양으로 각막 중앙부를 눌러서
                                <span>
                                    <br />
                                </span>
                                변형 없음
                                <span>
                                    <br />
                                </span>
                                안구형태를 반영한 곡면
                                <span> 3D입체 각막 절삭</span>
                                가능
                                <span>
                                    <br />
                                </span>
                                각막을 누르는 압력으로 수술 중 생기는 BLACK
                                OUT현상
                                <span>
                                    <br />
                                </span>
                                (순간 눈앞이 안보임)이 발생하지 않아 이상적이고
                                정확한
                                <span>
                                    <br />
                                </span>
                                각막절편 제작 가능
                            </Lasik_sec2_row4_context>
                        </Lasik_sec2_row4_contextWrapper>
                    </Lasik_sec2_row4>
                </Lasik_sec2>
                <Lasik_sec3>
                    <Lasik_sec3_textContainer>
                        <h4>2019년형 펨토세컨 레이저</h4>
                        <h1>비쥬맥스</h1>
                        <Lasik_sec3_circleContainer>
                            {sec3_content.map((ele) => (
                                <Circle>
                                    <h3>{ele.title}</h3>
                                    {ele.information.map((row, index) => (
                                        <span>
                                            {row}
                                            <br />
                                        </span>
                                    ))}
                                </Circle>
                            ))}
                        </Lasik_sec3_circleContainer>
                    </Lasik_sec3_textContainer>
                </Lasik_sec3>
                <Lasik_sec4>
                    {sec4_content.map((ele, index) => (
                        <Lasik_sec4_container>
                            {index === 0 ? (
                                <Lasik_sec4_title>
                                    <h1>원데이 비쥬라식</h1>
                                    <span>&nbsp;</span>
                                    <h2>수술의 장점</h2>
                                </Lasik_sec4_title>
                            ) : (
                                <Lasik_sec4_title>
                                    <h1>{ele.title}</h1>
                                </Lasik_sec4_title>
                            )}
                            {ele.information.map((list) => (
                                <Lasik_sec4_ele>
                                    <GreenCircleWithCheck className="green_circle_with_check" />

                                    <span>{list}</span>
                                </Lasik_sec4_ele>
                            ))}
                        </Lasik_sec4_container>
                    ))}
                </Lasik_sec4>
            </LasikWrapper>
        </LasikContainer>
    )
}
export default Lasik
