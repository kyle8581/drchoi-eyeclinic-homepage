import React from "react";
import styled from 'styled-components'
import backGroundAsset from "./doctor_background_asset.json";
import DoctorBackgroundStructure from "./DoctorBackgroundStructure";
import "./DoctorMentSlide3.css";
function DoctorSayHi() {
  const MobildeNameTag = styled.div`
  @media screen and (min-width:501px){
      visibility: collapse;
    }
    position: absolute;
    bottom : 2.5rem;
    right : 1rem;
    
    display : flex;
    flex-direction: row;
    text-align: bottom;
    h1{
      font-size : 1.5rem;
      color : #fff;
      font-family: NanumSquare_ac;
      letter-spacing: 0.2rem;
      margin-right: 0.7rem;
      transform: translateY(1rem);
    }
    h2{
      font-size: 2.5rem;
      color:#60afb2;
      font-family: NanumSquare_acB;
      letter-spacing: 0.4rem;
    }
    
  `;
  return (
    <section className="doctorBackgroundContainer">
      <MobildeNameTag>
        <h1>
          원장
        </h1>
        <h2>
          최승일
        </h2>
      </MobildeNameTag>
      <div className="content_wrapper">
        <div className="text-container">
          <div className="doctorName">
          <div className="small__text">원장</div>
          <div className="large__text">최승일</div>
          </div>
          <div className="trustIn">
            <div className="trust">TRUST</div>
            <div className="in">IN</div>
          </div>
          <div className="wordings">
            <div className="comment">
            <div className="row1">소중한 눈,</div>
            <div className="row2">누구에게 맡기시겠습니까?</div>
            </div>
            <div className="start">&#x201C;</div>
            <div className="end">&#x201D;</div>
          </div>
        </div>
        <div className="tablet_wording">
          <div className="tablet_wording_content">
            <span>23년 무사고</span>
            <span>임상 1만시간 이상, 3만 임상증례를 넘는 시력교정술 경험</span>
            <span>최첨단 장비와 51가지 정밀검사로 당신의 눈에 최적화된</span>
            <span>수술만을 집도합니다.</span>
          </div>
          <div className="qt_start">&#x201C;</div>
          <div className="qt_end">&#x201D;</div>
        </div>
        <div className="doctor-background">
        <div className="col1">
          <DoctorBackgroundStructure boundary={[0,backGroundAsset.length-9]}/>
        </div>
        <div className="col2">
          <DoctorBackgroundStructure boundary={[backGroundAsset.length-8,backGroundAsset.length-1]}/>
        </div>
        </div>
      </div>
      <img className="docImage" src="doctor/doctorImg.png" alt="Dr.choi"/>
    </section>
  );
}

export default DoctorSayHi;
