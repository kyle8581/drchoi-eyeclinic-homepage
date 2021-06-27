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
} from './Lasik.components'
function Lasik() {
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
                        <h4>
                            압구정최안과는 펨토세컨레이저를 이용하여 빠르고
                            정확한 수술이 가능합니다.
                        </h4>
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
                </Lasik_sec2>
            </LasikWrapper>
        </LasikContainer>
    )
}
export default Lasik
