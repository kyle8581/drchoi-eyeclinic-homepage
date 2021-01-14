import React from "react";
import backGroundAsset from "./doctor_background_asset.json";
function DoctorBackgroundStructure({boundary}){
    return(
    backGroundAsset.filter((bg,index)=>(index>=boundary[0] & index<=boundary[1])
    ).map((bg)=>
    <div className="background">
      <span className="date">{bg.date}</span>
       <span className="bgContent">{bg.content}</span>
      </div> 
    )
    )
}

export default DoctorBackgroundStructure;