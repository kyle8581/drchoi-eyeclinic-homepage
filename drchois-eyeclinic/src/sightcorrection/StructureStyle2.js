import React from "react";

function StructureStyle2({
  surgeryName,
  surgerySummary,
  surgeryPluses,
  ICL,
  MPL,
}) {
  return (
    <section className="surgeryContainer">
      <div className="surgeryName">
        <h1>{surgeryName}</h1>
      </div>
      <div className="surgerySummary">
        <h5>Summary</h5>
        {surgerySummary}
      </div>
      <div className="surgeryPluses">
        <h5>Advantages</h5>
        {surgeryPluses.map((sp, index) => (
          <li key={index} className="pluses_plus">
            {sp}
          </li>
        ))}
      </div>
      <div className="ICL">
        <h5>ICL</h5>
        {ICL.map((icl, index) => (
          <li key={index} className="ICL_explain">
            {icl}
          </li>
        ))}
      </div>
      <div className="MPL">
        <h5>MPL</h5>
        {MPL.map((mpl, index) => (
          <li key={index} className="MPL_explain">
            {mpl}
          </li>
        ))}
      </div>
    </section>
  );
}

export default StructureStyle2;
