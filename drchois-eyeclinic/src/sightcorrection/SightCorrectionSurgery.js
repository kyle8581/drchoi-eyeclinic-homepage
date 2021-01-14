import React from "react";
import StructureStyle1 from "./StructureStyle1";
import StructureStyle2 from "./StructureStyle2";
import surgery from "./contents";
import TopNav from "../TopNav";

function SightCorrectionSurgery() {
  const lensImplantation = surgery.filter(
    (lens) => lens.Name === "Lens Implantation"
  )[0];
  const mainSurgery = surgery.filter(
    (main) => main.Name !== "Lens Implantation"
  );
  return (
    <section className="container">
      <TopNav/>
      <h1>Sight Correction Surgery</h1>
      {mainSurgery.map((surgeries) => (
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
      </div>
    </section>
  );
}

export default SightCorrectionSurgery;
