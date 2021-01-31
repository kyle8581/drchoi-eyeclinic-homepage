import React from 'react'
import { Wrapper, Title, Paragraph } from './MobileSignature.components'
function MobileSignature() {
    return (
        <Wrapper>
            <img
                className="bg"
                src="/doctor-ment/mobile_sitting.png"
                alt="bg"
            />
            <Title>
                <div className="green">Philosoph of</div>
                <div className="white"> 압구정최안과</div>
            </Title>
            <Paragraph>
                <span>하루의 진료를 시작하기 전,</span>
                <span>나를 믿고 기꺼이 수술대에 몸을 눕히는 환자들을 보며</span>
                <span>나는 항상 스스로에게 다짐합니다.</span>
                <div className="blank"></div>
                <span>내 환자의 안전한 치료를 위해 결코</span>
                <span>타협하지 않겠습니다.</span>
                <span>환자를 위한 연구를 게을리하지 않습니다.</span>
                <div className="blank"></div>

                <span>환자를 내가족으로 생각하고</span>
                <span>최우선의 치료방법이 무엇인가 생각하며</span>
                <span>진료하는 의사이기를</span>
                <span>다짐합니다</span>
                <div className="blank"></div>

                <span>사회적 책임을 다하겠습니다.</span>
                <span>해외의료 봉사팀원으로 어려운</span>
                <span>이들을 위하여</span>
                <span>진료 수술 봉사를 하며 사회를</span>
                <span>치료하는 의사가 되고자</span>
                <span>노력하고 있습니다.</span>
                <div className="space"></div>
                <span>압구정최안과 대표원장</span>
                <span>최승일</span>
                <img
                    className="signature"
                    src="/doctor-ment/signature.png"
                    alt="signature"
                />
            </Paragraph>
        </Wrapper>
    )
}
export default MobileSignature
