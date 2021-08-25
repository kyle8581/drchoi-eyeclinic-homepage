import React from 'react'
import {
    BackGround,
    Wrapper,
    NavBar,
    NavBarButton,
    TopBar,
    MapAndText,
    TopBarTitle,
    TopBarContent,
    PhoneNumber,
    Address,
    PrintButton,
    MapImage,
    WayContainer,
    WayTitle,
    ParkContainer,
    ParkContent,
    SubwayContainer,
    SubwayContent,
    BusContainer,
    BusContent,
    BusRow,
    BusSmallTitle,
    MobileAddressContainer,
    MobileAddressContent,
    MobileEnlargeButton,
} from './Map.components'
import Airplane from '../icon_components/Airplane'
import B from '../icon_components/B'
import G from '../icon_components/G'
import R from '../icon_components/R'

function Map() {
    // const [isToggle, setToggle] = useState(false)
    // function handleHover() {
    //     setToggle(!isToggle)
    //     console.log(isToggle)
    // }
    return (
        <BackGround>
            <Wrapper>
                <NavBar>
                    <NavBarButton toggled={true}>
                        <div>지도 보기</div>
                    </NavBarButton>
                    <NavBarButton toggled={false}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://map.naver.com/v5/entry/place/1874745458?c=14140787.8776666,4512479.5738648,13,0,0,0,dh&placePath=%2Fhome%3Fentry=plt"
                        >
                            빠른 길찾기
                        </a>
                    </NavBarButton>
                </NavBar>
                <TopBar>
                    <TopBarTitle>오시는 길</TopBarTitle>
                    <TopBarContent>
                        <PhoneNumber>02 6956 8711</PhoneNumber>
                        <Address>강남구 논현로 848 8층 압구정최안과</Address>
                    </TopBarContent>
                    <PrintButton onClick={window.print}>
                        <div>약도 인쇄하기</div>
                    </PrintButton>
                </TopBar>
                <MapAndText>
                    <MapImage>
                        <img src="/map/map_image.png" alt="map" />
                    </MapImage>
                    <MobileEnlargeButton href="http://naver.me/FvnCL3iG">
                        <div>크게 보기</div>
                    </MobileEnlargeButton>
                    <MobileAddressContainer>
                        <WayTitle>주소</WayTitle>
                        <MobileAddressContent>
                            강남구 논현로 848 8층 압구정최안과
                        </MobileAddressContent>
                    </MobileAddressContainer>
                    <WayContainer>
                        <ParkContainer>
                            <WayTitle>주차이용안내</WayTitle>
                            <ParkContent>
                                <h1>CGV 별관</h1>
                                <p>발렛파킹 이용</p>
                            </ParkContent>
                        </ParkContainer>
                        <SubwayContainer>
                            <WayTitle>지하철 이용시</WayTitle>
                            <SubwayContent>
                                <h1>
                                    3호선 압구정역 3번 출구로 나와 좌측 도보 70m
                                    전방
                                </h1>
                            </SubwayContent>
                        </SubwayContainer>
                        <BusContainer>
                            <WayTitle>버스 이용시</WayTitle>
                            <BusContent>
                                <BusSmallTitle>압구정역</BusSmallTitle>
                                <BusRow line="gray">
                                    <Airplane />
                                    <p>공항</p>
                                    <div className="line__num">6006번</div>
                                </BusRow>
                                <BusSmallTitle>현대아파트</BusSmallTitle>
                                <div>
                                    <BusRow line="blue">
                                        <B />
                                        <p>간선</p>
                                        <div className="line__num">
                                            143번, 148번, 240번, 301번, 351번,
                                            362번, 440번, 472번
                                        </div>
                                    </BusRow>
                                    <BusRow line="green">
                                        <G />
                                        <p>지선</p>
                                        <div className="line__num">
                                            2411번, 3011번, 4318번, 4412번,
                                            4419번
                                        </div>
                                    </BusRow>
                                </div>

                                <BusSmallTitle>압구정역 3번 출구</BusSmallTitle>
                                <div>
                                    <BusRow line="blue">
                                        <B />
                                        <p>간선</p>
                                        <div className="line__num">
                                            147번, 148번
                                        </div>
                                    </BusRow>
                                    <BusRow line="red">
                                        <R />
                                        <p>직행</p>
                                        <div className="line__num">6800번</div>
                                    </BusRow>
                                </div>
                                <BusSmallTitle>압구정역 4번 출구</BusSmallTitle>
                                <div>
                                    <BusRow line="blue">
                                        <B />
                                        <p>간선</p>
                                        <div className="line__num">
                                            147번, 148번, 240번
                                        </div>
                                    </BusRow>
                                    <BusRow line="red">
                                        <R />
                                        <p>직행</p>
                                        <div className="line__num">9404번</div>
                                    </BusRow>
                                </div>
                            </BusContent>
                        </BusContainer>
                    </WayContainer>
                </MapAndText>
            </Wrapper>
        </BackGround>
    )
}
export default Map
