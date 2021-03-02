import React from 'react'
import { View, Wrapper } from '../test-process/DesktopTestProcess.components'
import effectimg1 from './images/effect_img1.png'
import effectimg2 from './images/effect_img2.png'
import effectimg3 from './images/effect_img3.png'
import effectimg4 from './images/effect_img4.png'
import wear1 from './images/wear1.png'
import wear2 from './images/wear2.png'
import wear3 from './images/wear3.png'
import wear4 from './images/wear4.png'
import beforeandafter from './images/before_and_after.png'
import GreenCircleWithNumber from '../icon_components/GreenCircleWithNumber'
import GreenCircleWithCheck from '../icon_components/GreenCircleWithCheck'
import {
    Section1,
    ExplainLeft,
    ExplainRight,
    Section2,
    EffectParagraph,
    EffectProcess,
    BeforeAndAfter,
    Section3,
    PositiveRow,
    HowToWear,
    Section4,
} from './DesktopDreamLens.components'

export default function DesktopDreamLens() {
    return (
        <View>
            <Wrapper>
                <Section1>
                    <ExplainLeft>
                        <div className="title">드림렌즈</div>
                        <div className="middle">Dream Lens</div>
                        <div className="par">
                            <div>각막의 중심 부위를 편평하게 눌러주어</div>
                            <div>시력을 교정하는 렌즈로</div>
                            <div>자기 전에 착용하고 아침에 렌즈를 제거하면</div>
                            <div>일시적으로 시력교정이 되어 수술이나</div>
                            <div>
                                안경 없이 일상생활이 가능한 시력교정 방법{' '}
                            </div>
                        </div>
                    </ExplainLeft>
                    <ExplainRight />
                </Section1>
                <Section2>
                    <EffectParagraph>
                        <div className="title">드림렌즈의 효과와 원리</div>
                        <div className="row">
                            콘택트렌즈를 이용하여 각막의 형태를 변화시키는{' '}
                            <div className="bold">무수술 각막교정술원리</div>
                        </div>
                        <div className="row">
                            각막을 편평하게 만들어서 각막에서의 굴절력을
                            감소시켜 눈에 초점이 정확히 맺히게 되어
                        </div>
                        <div className="row">근시를 교정합니다.</div>
                    </EffectParagraph>
                    <EffectProcess>
                        <div>
                            <img src={effectimg1} alt="effectimg" />
                        </div>
                        <div>
                            <img src={effectimg2} alt="effectimg" />
                        </div>
                        <div>
                            <img src={effectimg3} alt="effectimg" />
                        </div>
                        <div>
                            <img src={effectimg4} alt="effectimg" />
                        </div>

                        <div className="description">
                            <GreenCircleWithNumber number={1} />
                            <div className="text">시력이 저하된 안구</div>
                        </div>
                        <div className="description">
                            <GreenCircleWithNumber number={2} />
                            <div className="text">취침전 렌즈 착용</div>
                        </div>
                        <div className="description">
                            <GreenCircleWithNumber number={3} />
                            <div className="text">
                                각막을 정상적인 굴절상태로 복원
                            </div>
                        </div>
                        <div className="description">
                            <GreenCircleWithNumber number={4} />
                            <div className="text">
                                다음날 아침 렌즈를 빼면 시력이 회복{' '}
                            </div>
                        </div>
                    </EffectProcess>
                    <BeforeAndAfter
                        src={beforeandafter}
                        alt="baf"
                    ></BeforeAndAfter>
                </Section2>
                <Section3>
                    <div className="title">드림렌즈의 장점</div>
                    <PositiveRow>
                        <GreenCircleWithCheck />
                        <p> 연령 제한 없음(소아, 초등학생도 시술 가능)</p>
                    </PositiveRow>
                    <PositiveRow>
                        <GreenCircleWithCheck />
                        <p>
                            {' '}
                            성장기에 사용하면 근시와 난시 진행을 억제 할 수 있기
                            때문에 더 효과적.
                        </p>
                    </PositiveRow>
                    <PositiveRow>
                        <GreenCircleWithCheck />
                        <p>
                            {' '}
                            성인의 경우에는 기존 콘택트렌즈 사용으로 부작용이
                            발생한 때에도 사용할 수 있다.{' '}
                        </p>
                    </PositiveRow>
                    <PositiveRow>
                        <GreenCircleWithCheck />
                        <p>
                            {' '}
                            안경을 착용하기 어려운 운동선수나 경찰, 소방관,
                            승무원 등 특수 직업 종사자 에게도 적합합니다.
                        </p>
                    </PositiveRow>
                    <PositiveRow>
                        <GreenCircleWithCheck />
                        <p> 수술을 하지 않고도 안경, 렌즈 없이 시력 회복 </p>
                    </PositiveRow>
                    <PositiveRow>
                        <GreenCircleWithCheck />{' '}
                        <p>통증 최소화, 적응이 쉽고 편안함</p>
                    </PositiveRow>
                </Section3>
                <HowToWear>
                    <div className="title">연준이의 드림렌즈 착용법</div>
                    <div className="process">
                        <div>
                            <img src={wear1} alt="wear" />
                        </div>
                        <div>
                            <img src={wear2} alt="wear" />
                        </div>
                        <div>
                            <img src={wear3} alt="wear" />
                        </div>
                        <div>
                            <img src={wear4} alt="wear" />
                        </div>

                        <div className="text">
                            렌즈를 끼기 전 안약을 넣는다.
                        </div>
                        <div className="text">손과 렌즈를 깨끗이 씻는다.</div>
                        <div className="text">눈을 위 아래로 크게 벌린다.</div>
                        <div className="text">렌즈를 착용한다.</div>
                    </div>
                </HowToWear>
                <Section4>
                    <div className="text">
                        "드림렌즈로{'\n'}자신감을 찾으세요!"{' '}
                    </div>
                </Section4>
            </Wrapper>
        </View>
    )
}
