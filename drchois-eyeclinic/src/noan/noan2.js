import React from 'react'
import GreenCircleWithCheck from '../icon_components/GreenCircleWithCheck'
import GreenCircleWithNumber from '../icon_components/GreenCircleWithNumber'
import GreenBox from '../icon_components/GreenBox'
import{
Container,
Sec1,
Sec1Title,
Sec1Content,
Sec1Img,
Sec2,
Sec2Title,
Sec2Content,
Sec2List,
Sec2ListContent,
Sec3,
Sec3Img,
Sec3Title,
Sec3SubTitle,
Sec3CircleBox,
Sec3Circle,
Sec3Content,
Sec4Img,
Sec5,
Sec5Title,
Sec5Content,
Sec5List,
Sec5ListContent,
Sec6,
Sec6Title,
Sec6ListBox,
Sec6ContentBox,
Sec6ContentWrapper,
Sec6Img,
Sec6Description,
Sec7,
Sec7Title,
Sec7List,
Sec7ListComponent,
} from './noan2.components'
import Media from 'react-media'
const Sec2Components=[
    "근거리(신문, 책, 휴대폰 등) 흐리게 보임",
    "먼 곳과 가까운 곳을 교대로 볼 때 초점 전환이 느림",
    "근거리를 오래 볼 경우 두통이 발생하는 현상",
    "어두운 환경이나 피로할 경우 시력저하가 발생",
    "돋보기를 착용할 경우 정확하게 보임"
]
const Sec3Circles=[
    {first:["23년 무사고","  "],
    second:["1만증례이상의","임상경험"]},
    {first:["카톨릭대","출신 원장"],
second:["1:1주치의","클리닉"]},
{
first:["센츄리온","AI 첨단장비"],
second:["타협없는","안전지향"]
}
]
const Sec5Components=[
    "현재 40세 이상이다.",
    "신문이나 책을 읽을 때 작은 글씨가 흐리고 초점이 맞지 않는다.",
    "가까운 거리의 글씨는 20~30cm 정도 거리를 두어야 보인다.",
    "근거리 작업을 하면 눈이 쉽게 피곤하고 두통이 생길 때도 있다.",
    "어두운 조명에서 글자 읽기가 힘들다.",
    "눈이 항상 뿌옇고 침침하다.",
    "신문을 보다가 먼 곳을 바라보면 초점이 잘 맞지 않는다."
]
const Sec6Components=[
    {title: "노안 라식 수술과정",
    contents: [{src:"surgery/Lasek/lasek_process1.png",text:"초고속 레이저를 쏘아 각막절편 만들어 올려 젖힘"},
    {src:"surgery/Lasek/lasek_process2.png",text:"각막절편을 열고 레이저 쏘아 시력교정 진행"},
    {src:"surgery/Lasek/lasek_process3.png",text:"각막절편 원위치로 다시 덮음"}]
},
{title: "노안 라섹 수술과정",
contents: [{src:"surgery/Lasek/lasek_process1.png",text:"특수약품을 넣어 불린 후 각막 상피층을 벗겨냄"},
{src:"surgery/Lasek/lasek_process2.png",text:"레이저를 이용하여 시력교정"},
{src:"surgery/Lasek/lasek_process3.png",text:"각막 상피층을 다시 덮고 치료용 콘택트렌즈 착용"}]
},
{title: "노안 스마일 수술과정",
contents: [{src:"surgery/Lasek/lasek_process1.png",text:"레이저로 각막 굴절삭제량 커팅"},
{src:"surgery/Lasek/lasek_process2.png",text:"레이저로 각막 2~4mm 최소절개"},
{src:"surgery/Lasek/lasek_process3.png",text:"최소 절개창을 통한 각막실질 제거"}]
},
]
const Sec7Components = [
    "40대 전후 라식/라섹 수술을 원한다면 OK!",
    "빠르고 정확한 첨단 레이저 사용으로 안전하게 수술 가능",
    "수술이 비교적 간단하고, 회복이 빠름",
    "안경, 돋보기 사용할 필요 없음"
]
function Noan2() {
return(
    <Container>
        <Sec1>
            {/* <div className="greenbox"><GreenBox/></div> */}
            
            <Sec1Title>
                <p>노안 시력교정</p>
            </Sec1Title>
            <Media queries={{ mobile: { maxWidth: 500 } }}>
            {(matches) =>
                matches.mobile ? (
                    <Sec1Content>
                        <span>대체로 40대가 넘어가면 수정체의 탄력이 떨어지고
                            <br/>
                            두꺼워지며, 수정체의 두께를 조절하는 모양체 근육의
                            <br/>
                            힘도 떨어지게 되며 30센티 이내의 근거리 물체가 잘
                            <br/>
                            보이지 않는 상태가 노안입니다.
                            <br/>
                            최근 스마트폰 및 태블릿 등 휴대기기 사용시간이 늘어
                            <br/>
                            젊은 노안이 늘어나고 있습니다.
                        </span>
                    </Sec1Content>
                ):(
                    <Sec1Content>
                        <span>
                    대체로 40대가 넘어가면 수정체의 탄력이 떨어지고 두꺼워지며, 수정체의 두께를 조절하는 모양체 근육의
                <br/>
                
                    힘도 떨어지게 되어 30센티 이내의 근거리 물체가 잘 보이지 않는 상태가 노안입니다. 최근 스마트폰 및
                <br/>               
                    태블릿 등 휴대기기 사용시간이 늘어 젊은 노인이 늘어나고 있습니다.
                </span>
                    </Sec1Content>
                )}</Media>
            
            <Media queries={{ mobile: { maxWidth: 500 } }}>
            {(matches) =>
                matches.mobile ? (
                    <Sec1Img src="noan2/sec1ImgMobile.png"/>
                ):(
                    <Media queries={{tablet:{maxWidth:1000}}}>
                        {(matches)=>
                            matches.tablet?(
                                <Sec1Img src="noan2/sec1ImgTablet.png"/>
                            ):(
                                <Sec1Img src="noan2/sec1Img.png"/>
                            )}</Media>
                )}
            </Media>
        </Sec1>
        <Sec2>
            <Sec2Title>
                노안의 증상
            </Sec2Title>
            <Sec2Content>
                <span>노안의 초기 증상은 신문이나 책을 읽는 거리가 점점 멀어지는 것이며 
                가장 간단한 교정은 돋보기 착용입니다.
                </span>
            </Sec2Content>
            <Sec2List>
                {Sec2Components.map(ele=>(
                    <Sec2ListContent>
                        <GreenCircleWithCheck/>
                        <span>{ele}</span>
                    </Sec2ListContent>
                ) )}
            </Sec2List>
        </Sec2>
        {/* <Sec3>
            <Sec3Title>
                <span className="blue">"23년 무사고 1만 증례 이상</span>
                <span>의 백내장 수술 집도"</span>
            </Sec3Title>
            <Sec3SubTitle>
                <span>1:1 마음을 다하여 치료하는 주치의 클리닉</span>
            </Sec3SubTitle>
            <Sec3CircleBox>
                {Sec3Circles.map(ele=>(
                    <Sec3Circle>
                        <div className="firstP">
                            {ele.first.map(a=>(<p>{a}</p>))}
                        </div>
                        <div className="secondP">
                            {ele.second.map(a=>(<p>{a}</p>))}
                        </div>
                    </Sec3Circle>
                ))}
            </Sec3CircleBox>
            <Sec3Content>
                <p>각각 다른 환자의 눈을 첨단장비로 정밀진단 하고</p>
                <p>풍부한 임상경험으로 가장 적합한 노모그람을 적용하여 집도합니다.</p>
            </Sec3Content>
        </Sec3> */}
        <Sec3Img src="noan2/sec3.png"/>
        <Sec4Img/>
        <Sec5>
            <Sec5Title>
                노안 자가진단
            </Sec5Title>
            <Sec5Content>
                4개 이상 해당된다면 노안이 의심되므로 '노안검사'와 함께 나에게 맞는 교정 방법을 상담 받으세요.
            </Sec5Content>
            <Sec5List>
                {Sec5Components.map(ele=>(
                    <Sec5ListContent>
                        <GreenCircleWithCheck />
                        <span>{ele}</span>
                    </Sec5ListContent>
                ))}
            </Sec5List>
        </Sec5>
        <Sec6>
        <Media queries={{ mobile: { maxWidth: 500 } }}>
            {(matches) =>
                matches.mobile ? (
                    <Sec6ListBox>
                        <img src="noan2/sec6LasikMobile.png"/>
                        <img src="noan2/sec6LasekMobile.png"/>
                        <img src="noan2/sec6SmileMobile.png"/>
                    </Sec6ListBox>
                ):(
                    <Media queries={{tablet:{maxWidth:1000}}}>
                        {(matches)=>
                            matches.tablet?(
                                <Sec6ListBox>
                                <img src="noan2/sec6LasikTablet.png"/>
                        <img src="noan2/sec6LasekTablet.png"/>
                        <img src="noan2/sec6SmileTablet.png"/>
                        </Sec6ListBox>
                            ):(
                                <Sec6ListBox>
                                <img src="noan2/sec6Lasik.png"/>
                        <img src="noan2/sec6Lasek.png"/>
                        <img src="noan2/sec7Smile.png"/>
                        </Sec6ListBox>
                            )
                        }
                    </Media>
                )}
        </Media>
        {/* {Sec6Components.map(ele=>(
                    <Sec6ListBox>
                        <Sec6Title>{ele.title}</Sec6Title>
                        <Sec6ContentBox>
                            {ele.contents.map((content,index)=>(
                                <Sec6ContentWrapper>
                                    <Sec6Img src={content.src}/>
                                    <Sec6Description>
                                        <GreenCircleWithNumber number={index+1}/>
                                        <span>{content.text}</span>
                                    </Sec6Description>
                                </Sec6ContentWrapper>
                            ))}
                        </Sec6ContentBox>
                    </Sec6ListBox>
                    ))} */}
        </Sec6>
        <Sec7>
            <Sec7Title>
                <span>노안 시력교정 </span>
                <span className="orange">수술의 장점</span>
            </Sec7Title>
            <Sec7List>
                {Sec7Components.map(ele=>(
                    <Sec7ListComponent>
                        <GreenCircleWithCheck/>
                        <span>{ele}</span>
                    </Sec7ListComponent>
                ))}
            </Sec7List>
        </Sec7>
    </Container>

)
}

export default Noan2