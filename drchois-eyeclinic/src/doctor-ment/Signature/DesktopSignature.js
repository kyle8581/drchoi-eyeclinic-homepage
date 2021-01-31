import React from 'react'
import {
    Wrapper,
    Background,
    Paragraph,
    Title,
} from './DesktopSignature.components'
function DesktopSignature() {
    return (
        <Wrapper>
            <Background />
            <Title>
                <div className="green">Philosoph of</div>
                <div className="gray"> 압구정 최안과</div>
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
                <span>
                    최우선의 치료방법이 무엇인가 생각하며 진료하는 의사이기를
                </span>
                <span>다짐합니다</span>
                <div className="blank"></div>

                <span>사회적 책임을 다하겠습니다.</span>
                <span>
                    자연과 멀어진 현대인의 눈 건강을 위해 초록색을 보자는{' '}
                </span>
                <span>‘Eye like Green' 캠페인을 꾸준히 펼치고 있으며 </span>
                <span>
                    해마다 캄보디아 자선병원 헤브론 병원에서 가톨릭동문회
                    해외의료{' '}
                </span>
                <span>
                    봉사팀원으로 무료 진료 수술 봉사를 하며 사회를 치료하는
                    의사가{' '}
                </span>
                <span>되고자 노력하고 있습니다.</span>
                <div className="space"></div>
                <div className="name">압구정최안과 대표원장 최승일</div>
                <img
                    className="signature"
                    src="/doctor-ment/signature.png"
                    alt="signature"
                />
            </Paragraph>
        </Wrapper>
    )
}
export default DesktopSignature
