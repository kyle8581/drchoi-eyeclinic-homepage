import React,{useState} from "react";
import StructureStyle1 from "./StructureStyle1";
import StructureStyle2 from "./StructureStyle2";
import surgery from "./contents";
import TopNav from "../TopNav";
import Lasik from "./Lasik";
import Lasek from "./Lasik";
import Smile from "./Smile";
import SideNav from "./SideNavBar";
import {BrowserRouter as Router} from "react-router-dom";
function SightCorrectionSurgery() {
  const lensImplantation = surgery.filter(
    (lens) => lens.Name === "Lens Implantation"
  )[0];
  const mainSurgery = surgery.filter(
    (main) => main.Name !== "Lens Implantation"
  );
  const [curSlide, setCurslide] = useState(1);
  return (
    <section className="sightcorrection-container">
      <TopNav/>
      <Router>
        <SideNav/>
      <div className="lasik">
        <Lasik />
      </div>
      <div className="lasek">
        <Lasek/>
      </div>
      <div className="smile">
        <Smile/>
      </div>
      </Router>
      {/* {mainSurgery.map((surgeries) => (
        <div className={surgeries.Name}>
          <StructureStyle1
            surgeryName={surgeries.Name}
            surgerySummary={surgeries.Summary}
            surgeryProcess={surgeries.Process_img}
            surgeryPluses={surgeries.Pluses}
            recommendation={surgeries.Recommendation}
          />
        </div>
      ))}
      <div className={lensImplantation.Name}>
        <StructureStyle2
          surgeryName={lensImplantation.Name}
          surgerySummary={lensImplantation.Summary}
          surgeryPluses={lensImplantation.Pluses}
          ICL={lensImplantation.ICL}
          MPL={lensImplantation.MPL}
        />
      </div> */}
    </section>
  );
}

export default SightCorrectionSurgery;
