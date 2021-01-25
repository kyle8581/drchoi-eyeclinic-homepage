import React from "react";

import backGroundAsset from "./doctor_background_asset.json";
import DoctorBackgroundStructure from "./DoctorBackgroundStructure";
// import "./doctor_background.css";
function DoctorSayHi() {
  return (
    <section className="doctorBackgroundContainer">
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
            <div className="start">"</div>
            <div className="end">"</div>
          </div>
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
      <img className={"docImage"} src="doctor/doctorImg.png" alt="Dr.choi"/>
    </section>
  );
}

export default DoctorSayHi;
