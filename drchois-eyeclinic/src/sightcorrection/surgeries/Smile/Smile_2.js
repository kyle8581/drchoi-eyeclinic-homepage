import React from "react";
import "./Smile_2.css";
import surgery from "../contents"
function SmileTwo(){
    const smile= surgery.filter(ele=>ele.Name==="Smile")[0].Process_img;
    return(
        <section className="Smile2-container">
            <div className="content-wrapper">
                <div className="first-row">
                    <div className="first-element">
                        <img src="surgery/Smile/smileinfo_l.png" alt="Dr.choi"/>
                    </div>
                    <div className="second-element">
                        <div className="title">4세대 시력교정술 스마일(SMILE)</div>
                        <ul>
                            <li>각막 2~4mm 최소절개 후 각막 실질 제거</li>
                            <li>빠른 회복으로 수술 후 바로 일상생활가능</li>
                            <li>각막절편 관련 부작용 없음</li>
                        </ul>
                    </div>
                    <div className="third-element">
                        <img src="surgery/Smile/smileinfo_r.png" alt="Dr.choi"/>
                    </div>
                </div>
                <div className="second-row">
        {smile.map((el, index)=>{
            return (
            <div className={"Process"+index}>
                <img
                    src={`/surgery${el.src}`}
                    alt={`SmileProcess${el.id+1}`}
                />
                <div className="summary">{el.txt}</div>
            </div>
            )
          })}
        
      </div>
                </div>
        </section>
    );
}
export default SmileTwo;