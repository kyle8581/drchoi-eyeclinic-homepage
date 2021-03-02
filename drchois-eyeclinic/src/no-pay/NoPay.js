import React from 'react'
import {
    Wrapper,
    Container,
    NopayGreenBox,
    Title,
    Part,
    Grid1,
    Grid2,
} from './NoPay.components'
import TopNav from '../TopNav'
function NoPay() {
    return (
        <div>
            <TopNav />
            <Wrapper>
                <Container>
                    <Part>
                        <Title>
                            <NopayGreenBox />
                            <p>제증명 수수료 고지</p>
                        </Title>
                        <Grid1>
                            <div className="green_back">일반진단서</div>
                            <div className="content">
                                <div>한글진단서: 20,000원</div>
                                <div>영문진단서 : 20,000원</div>
                                <div>
                                    진단확인서(보험사 서식에 의한 것) : 50,000원
                                </div>
                            </div>
                            <div className="green_back">소견서</div>
                            <div className="content single">10,000원</div>
                            <div className="green_back">특수진단서</div>
                            <div className="content">
                                <div>
                                    장애진단서 - 신체적장애 : 15,000원 /
                                    정신적장애 : 40,000원
                                </div>
                                <div>병사용진단서 : 20,000원</div>
                                <div>상해진단서(3주미만) : 100,000원</div>
                                <div>상해진단서(3주이상) : 150,000원</div>
                            </div>
                            <div className="green_back">수술 / 진료확인서</div>
                            <div className="content single">3,000원</div>
                            <div className="green_back">
                                입 / 퇴 / 통원확인서
                            </div>
                            <div className="content single">3,000원</div>

                            <div className="green_back">의무기록사본</div>
                            <div className="content single">
                                5매 이하 : 1,000원 / 6매 이상 : 100원 추가 /
                                사본복사 : 1,000원
                            </div>
                        </Grid1>
                    </Part>
                    <Part>
                        <Title>
                            <NopayGreenBox />
                            <p>비급여 안내</p>
                        </Title>
                        <Grid2>
                            <div className="top blank"></div>
                            <div className="top name">명칭</div>
                            <div className="top price">비용</div>
                            <div className="row row1 type1">
                                <div>검사료</div>
                            </div>
                            <div className="name element">Pentacam</div>
                            <div className="price element">300,000</div>
                            <div className="name element">아벨리노</div>
                            <div className="price element">100,000~200,000</div>
                            <div className="row row2 type2">
                                <div>주사료</div>
                            </div>
                            <div className="name element">트리암주</div>
                            <div className="price element">30,000</div>
                            <div className="row row3 type1">
                                <div>렌즈</div>
                            </div>
                            <div className="name element">드림렌즈</div>
                            <div className="price element">
                                1,000,000~1,500,000
                            </div>
                            <div className="name element">하드렌즈</div>
                            <div className="price element">300,000~500,000</div>
                            <div className="row row4 type2">
                                <div>치료재료대</div>
                            </div>
                            <div className="name element">인공수정체</div>
                            <div className="price element">
                                1,500,000~4,400,000
                            </div>
                            <div className="row row5 type1">
                                <div>시력교정수술</div>
                            </div>
                            <div className="name element">라섹</div>
                            <div className="price element">
                                1,000,000~1,500,000
                            </div>
                            <div className="name element">라식</div>
                            <div className="price element">
                                1,600,000~1,800,000
                            </div>
                            <div className="name element">스마일</div>
                            <div className="price element">2,500,000 </div>
                            <div className="name element">렌즈삽입</div>
                            <div className="price element">
                                4,300,000~6,000,000
                            </div>
                            <div className="row row6 type2">
                                <div>기타</div>
                            </div>
                            <div className="name element">결막모반제거</div>
                            <div className="price element">100,000~300,000</div>
                            <div className="name element">결막모반재발</div>
                            <div className="price element">50,000</div>
                            <div className="name element">혈청</div>
                            <div className="price element">100,000~200,000</div>
                            <div className="name element">렌즈용액</div>
                            <div className="price element">9,000</div>
                        </Grid2>
                    </Part>
                </Container>
            </Wrapper>
        </div>
    )
}

export default NoPay
