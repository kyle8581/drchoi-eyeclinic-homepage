import React from 'react'
import {
    Section1,
    Container,
    View,
    Explain,
    ProcessWrapper,
    ProcessContainer,
    Process,
    Advantage,
    Section3,
    AquaTitle,
    AquaDescription,
    AquaLeft,
    AquaRight,
    AquaRow,
    SightComparison,
    Sight,
    Mpl,
    MplTitle,
    MplDescription,
    MplLeft,
    MplRight,
    MplRow,
    MplBackground,
    AquaBackground,
} from './MobileIcl.components'
import TopNav from '../TopNav'
import GreenCircleWithNumber from '../icon_components/GreenCircleWithNumber'
import GreenCircleWithCheck from '../icon_components/GreenCircleWithCheck'
function DesktopIcl() {
    return (
        <>
            <TopNav />
            <View>
                <Container>
                    <Section1>
                        <Explain>
                            <div className="title">안내렌즈 삽입술</div>
                            <div className="icl_word">
                                <div className="highlight">I</div>
                                <div>mplantable</div>
                                <div className="highlight">C</div>
                                <div>ontact</div>
                                <div className="highlight">L</div>
                                <div>ens</div>
                            </div>
                            <div className="par">
                                <div>눈 안에 적합한 렌즈를 삽입하여 시력을</div>
                                <div>
                                    교정하는 수술로 수술 과정이나 수술 후에도
                                </div>
                                <div>
                                    각막에 손상을 주지 않아
                                    <div className="bold1">
                                        안전하게 시력교정이
                                    </div>
                                </div>
                                <div>
                                    <div className="bold2">가능</div>한
                                    수술입니다.
                                </div>
                            </div>
                        </Explain>
                    </Section1>
                    <ProcessWrapper>
                        <ProcessContainer>
                            <Process>
                                <div className="title">수술과정</div>
                                <div className="process_with_image">
                                    <img
                                        src="/icl-desktop/process1.png"
                                        alt="process img"
                                    />
                                    <div className="process_text">
                                        <div className="row">
                                            <GreenCircleWithNumber number="1" />
                                            <div className="text">
                                                수술전에 각막을 2~3mm
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="text2">
                                                정도 절개합니다.
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        src="/icl-desktop/process2.png"
                                        alt="process img"
                                    />
                                    <div className="process_text">
                                        <div className="row">
                                            <GreenCircleWithNumber number="2" />
                                            <div className="text">
                                                렌즈를 조심스럽게 삽입합니다.
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        src="/icl-desktop/process3.png"
                                        alt="process img"
                                    />
                                    <div className="process_text">
                                        <div className="row">
                                            <GreenCircleWithNumber number="3" />
                                            <div className="text">
                                                렌즈를 바른 위치에 위치시킵니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Advantage>
                                    <div className="title">
                                        안내렌즈삽입수술의 장점
                                    </div>
                                    <div className="row">
                                        <div className="green_circle">
                                            <GreenCircleWithCheck />
                                        </div>
                                        <div className="text">
                                            각막을 그대로 보존하여 안전한 수술이
                                            가능합니다.{' '}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="green_circle">
                                            <GreenCircleWithCheck />
                                        </div>
                                        <div className="text">
                                            초고도 근시 및 각막이 얇은 경우에도
                                            수술이 가능합니다.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="green_circle">
                                            <GreenCircleWithCheck />
                                        </div>
                                        <div className="text">
                                            각막혼탁, 각막이영양증 등 각막질환이
                                            있어도 수술이 가능합니다.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="green_circle">
                                            <GreenCircleWithCheck />
                                        </div>
                                        <div className="text">
                                            근시 퇴행이 거의 없어 안정적인
                                            시력이 유지됩니다.{' '}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="green_circle">
                                            <GreenCircleWithCheck />
                                        </div>
                                        <div className="text">
                                            일상생활로 복귀가 빠릅니다.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="green_circle">
                                            <GreenCircleWithCheck />
                                        </div>
                                        <div className="text">
                                            야간 눈부심, 빛번짐이 적습니다.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="green_circle">
                                            <GreenCircleWithCheck />
                                        </div>
                                        <div className="text">
                                            렌즈를 제거하여 수술 전 상태로
                                            복원이 가능합니다.{' '}
                                        </div>
                                    </div>
                                </Advantage>
                            </Process>
                        </ProcessContainer>
                    </ProcessWrapper>
                    <AquaBackground />
                    <Sight>
                        <div className="title">
                            넓은 광학부로 야간 빛 번짐이 감소한 {'\n'}EVO AQUA
                            ICL
                        </div>
                        <SightComparison>
                            <div className="left_img"></div>
                            <div className="title">빛 번짐 시야</div>
                            <div className="right_img"></div>
                            <div className="title">EVO AQUA ICL 시야</div>
                        </SightComparison>
                    </Sight>
                    <MplBackground />
                </Container>
            </View>
        </>
    )
}

export default DesktopIcl
