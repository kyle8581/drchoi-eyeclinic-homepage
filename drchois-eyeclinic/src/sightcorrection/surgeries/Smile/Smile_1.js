import React from "react";
import "./SmileOne.css";
function SmileOne(){
    return(
       <section className="Smile1-container">
           <div className="content-wrapper">
               <div className="text-wrapper">
                    <div className="row1">스마일</div>
                    <div className="row2">
                        <div className="word1">
                        <div className="blue">SM</div>
                        <div className="gray">all</div>
                        </div>
                        <div className="word2">
                            <div className="blue">I</div>
                            <div className="gray">ncision</div>
                        </div>
                        <div className="word3">
                            <div className="blue">L</div>
                            <div className="gray">enticule</div>
                        </div>
                        <div className="word4">
                            <div className="blue">E</div>
                            <div className="gray">xtraction</div>
                        </div>
                    </div>
                    <div className="row3">
                        <div className="part1">각막실질에만 정교하게 레이저를 조사하여</div>
                        <div className="part2">굴절이상을 교정하고, 각막 표면을 최소절개</div>
                        <div className="part3">하므로 신경손상이 최소화 된 수술입니다.</div>   
                    </div>
                    <div className="row4">
                        <div className="part1">라식과 라섹의 장점을 결합, 단점을 보완한</div>
                        <div className="part2">4세대 시력교정술</div>
                    </div>
               </div>
               <div className="img-wrapper">
                <img src="surgery/Smile/human.png" alt="Smile-Model"/>
               </div>
           </div>
       </section>
    );
}
export default Smile;