import React from "react";

function DoctorSayHi() {
  return (
    <section className="container">
        <span>대표원장</span>
        <span>최승일</span>
        <div className="doctorComment">
          압구정최안과에서는 대표원장이 직접 고객 맞춤형 진료를 봅니다.
        </div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
import imageAsset from "./doctor_image_asset.json"          </div>
        </div>
    </section>
  );
}

export default DoctorSayHi;