import React from "react";
import "./SmileTwo.css";
import surgery from "../contents"
function SmileTwo(){
    return(
        <section className="Smile2-container">
            <div className="content-wrapper">
                <div className="first-row">
                    <div className="first-element">
                        <img src="" alt=""/>
                    </div>
                    <div className="second-element">

                    </div>
                    <div className="third-element">
                        <img src=" " alt=""/>
                    </div>
                </div>
                <div className="second-row">
        {surgery.filter(ele=>ele.Name==="Smile")[0].Process_img.map((el,index) => 
        {
            <div className={"Process"+index}>
          <img
            src={`/surgery${el.src}`}
            alt={`${surgeryName}Process${images.id}`}
          />
          <div className="summary">{ele.Process_txt[index]}</div>
          </div>
        })}
      </div>
                </div>
        </section>
    );
}
export default SmileTwo;