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
} from './DesktopIcl.components'
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
                                    <img
                                        src="/icl-desktop/process2.png"
                                        alt="process img"
                                    />
                                    <img
                                        src="/icl-desktop/process3.png"
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
                                    <div className="process_text">
                                        <div className="row">
                                            <GreenCircleWithNumber number="2" />
                                            <div className="text">
                                                렌즈를 조심스럽게 삽입합니다.
                                            </div>
                                        </div>
                                    </div>
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
                                        <GreenCircleWithCheck />
                                        <div className="text">
                                            각막을 그대로 보존하여 안전한 수술이
                                            가능합니다.{' '}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <GreenCircleWithCheck />
                                        <div className="text">
                                            초고도 근시 및 각막이 얇은 경우에도
                                            수술이 가능합니다.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <GreenCircleWithCheck />
                                        <div className="text">
                                            각막혼탁, 각막이영양증 등 각막질환이
                                            있어도 수술이 가능합니다.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <GreenCircleWithCheck />
                                        <div className="text">
                                            근시 퇴행이 거의 없어 안정적인
                                            시력이 유지됩니다.{' '}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <GreenCircleWithCheck />
                                        <div className="text">
                                            일상생활로 복귀가 빠릅니다.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <GreenCircleWithCheck />
                                        <div className="text">
                                            야간 눈부심, 빛번짐이 적습니다.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <GreenCircleWithCheck />
                                        <div className="text">
                                            렌즈를 제거하여 수술 전 상태로
                                            복원이 가능합니다.{' '}
                                        </div>
                                    </div>
                                </Advantage>
                            </Process>
                        </ProcessContainer>
                    </ProcessWrapper>
                    <Section3>
                        <AquaTitle>
                            <div className="title1">EVO+아쿠아 ICL</div>
                            <div className="title2">EVO AQUA ICL</div>
                        </AquaTitle>
                        <AquaDescription>
                            <AquaLeft>
                                <div className="text">
                                    <div>“ICL의 새로운 버전으로</div>
                                    <div>홍채절개술 없이 수술이</div>
                                    <div>가능한 신개념 안내렌즈”</div>
                                </div>
                                <img
                                    className="image"
                                    src="/icl-desktop/iclimage_at_bg2.png"
                                    alt="icl"
                                />
                            </AquaLeft>
                            <AquaRight>
                                <AquaRow>
                                    <div className="number">01</div>
                                    <div className="advantages">
                                        <div className="row">
                                            <div>
                                                가장 많은 수술이 진행되고 있는
                                                대표 렌즈로
                                            </div>
                                            <div className="bold">
                                                홍채 절개술 없이{' '}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="bold">
                                                수술이 가능
                                            </div>
                                            <div>합니다.</div>
                                        </div>
                                    </div>
                                </AquaRow>
                                <AquaRow>
                                    <div className="number">02</div>
                                    <div className="advantages">
                                        <div className="row">
                                            <div>
                                                렌즈 중앙에 작은 구멍(360㎛)이
                                                뚫려있어 자연스러운 방수의
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div>흐름이 가능하므로</div>
                                            <div className="bold">
                                                안압상승 위험 부담이 거의
                                                없습니다.
                                            </div>
                                        </div>
                                    </div>
                                </AquaRow>
                                <AquaRow>
                                    <div className="number">03</div>
                                    <div className="advantages">
                                        <div className="row">
                                            <div className="bold">
                                                자외선차단 기능
                                            </div>
                                            <div>
                                                으로 망막 손상 및 백내장같은
                                                질병으로부터
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div>눈을 보호해줍니다.</div>
                                        </div>
                                    </div>
                                </AquaRow>
                                <AquaRow>
                                    <div className="number">04</div>
                                    <div className="advantages">
                                        <div className="row">
                                            <div>넓은 광학부로 </div>
                                            <div className="bold">
                                                야간 빛번짐이 줄었습니다.
                                            </div>
                                        </div>
                                    </div>
                                </AquaRow>
                            </AquaRight>
                        </AquaDescription>
                    </Section3>
                    <Sight>
                        <div className="title">
                            넓은 광학부로 야간 빛 번짐이 감소한 EVO AQUA ICL
                        </div>
                        <SightComparison>
                            <div className="left_img"></div>
                            <div className="right_img"></div>
                            <div className="title">빛 번짐 시야</div>
                            <div className="title">EVO AQUA ICL 시야</div>
                        </SightComparison>
                    </Sight>
                    <Mpl>
                        <MplTitle>
                            <div className="title2">MPL</div>
                        </MplTitle>
                        <MplDescription>
                            <MplLeft></MplLeft>
                            <MplRight>
                                <MplRow>
                                    <div className="number">01</div>
                                    <div className="advantages">
                                        <div className="row">
                                            <div> 검은 동자가 작은 경우,</div>
                                            <div className="bold">
                                                전방 깊이가 얕은 경우에도
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="bold">
                                                수술이 가능
                                            </div>
                                            <div>합니다. </div>
                                        </div>
                                    </div>
                                </MplRow>
                                <MplRow>
                                    <div className="number">02</div>
                                    <div className="advantages">
                                        <div className="row">
                                            <div>
                                                렌즈 중앙에 작은 구멍(380㎛)이
                                                뚫려있어 자연스러운
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div>방수의 흐름이 가능하므로</div>
                                            <div className="bold">
                                                안압상승 위험 부담이 거의{' '}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="bold">
                                                없습니다.
                                            </div>
                                        </div>
                                    </div>
                                </MplRow>
                                <MplRow>
                                    <div className="number">03</div>
                                    <div className="advantages">
                                        <div className="row">
                                            <div>
                                                가벼운 렌즈 디자인으로 수술 후
                                            </div>
                                            <div className="bold">
                                                {' '}
                                                이물감이 느껴지지{' '}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="bold">
                                                않습니다.{' '}
                                            </div>
                                        </div>
                                    </div>
                                </MplRow>
                            </MplRight>
                        </MplDescription>
                    </Mpl>
                </Container>
            </View>
        </>
    )
}

export default DesktopIcl
